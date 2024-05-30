#!/usr/bin/perl -Tw
# The -T flag forces checking of tainted values, for security.

# CGI-bin script to look words up in my word list

use CGI qw/:standard -debug/;
# use_named_parameters(1);
use Encode;
use strict;
use utf8;

# parameters
	my $wordDir = "/homes/raphael/cs/links/y";
	my $dictionaryFile = "$wordDir/new.s";
	my $wordBaseFile = "$wordDir/baseWords.txt";
	my $cgiDir = ".";
	my $formFile = "$0";
	my $Debug = 0;

# constants
	my $maxDepth = 100; # no indentation is this deep

# globals
	my @contextLines;

sub init {
	$ENV{'PATH'} = '/bin:/usr/bin:/usr/local/bin:/usr/local/gnu/bin';
	$SIG{ALRM} = sub {exit(1);};
	alarm(10);
	$| = 1; # flush output
	$ENV{'REMOTE_HOST'} = Untaint($ENV{'REMOTE_HOST'});
	if ($Debug) {
		print header(-expires=>'+1m', -charset=>'UTF-8');
	}
	binmode STDOUT, ":utf8";
} # init

sub readFile {
	my ($fileName) = @_;
	open FILE, $fileName;
	binmode FILE, ":utf8";
	$/ = undef;
	my $result = <FILE>;
	close FILE;
	return $result;
} # readFile

my $serial = 0;
sub printForm {
	$serial += 1;
	# method=\"post\" enctype=\"multipart/form-data\">
	print "
	<form accept-charset=\"UTF-8\" method=\"post\" >
	A word or phrase or fragment to search (English, Yiddish, or transliterated
	Yiddish): 
	<div align='center'>
	<input name=\"word\" type=\"text\" class=\"typein big\"
		autocorrect='off' autocapitalize='none'
		autocomplete='off' spellcheck='false'
		id=\"entry$serial\"
		onmouseover=\"getElementById('entry$serial').focus()\"/>
	<input name=\"wholeWord\" type=\"checkbox\" /> whole word only
	</div>
	<br/>
	<div align='center'>
	or a whole, inflected word; we'll search its stem.
	<input name=\"base\" type=\"text\" class=\"typein \"
		autocorrect='off' autocapitalize='none'
		autocomplete='off' spellcheck='false'
		id=\"base$serial\"
		onmouseover=\"getElementById('base$serial').focus()\"/>
	</div>
	<br/>
	<div align='center'>
	<input type=\"submit\"/>
	</div>
	</form>
	\n";
} # printForm

sub grammar {
	my ($comment) = @_;
	return " <span class=\"grammar\">$comment</span>";
} # grammar

sub printNicely {
	my ($line, $searchWord) = @_;
	$line =~ s/\/V([\p{L}']+)/grammar("verb, infinitive") . " $1,"/eg;
	$line =~ s/\/V/grammar("verb") . ","/eg;
	$line =~ s/\/T/grammar("participle") . " ge...t,"/eg;
	$line =~ s/\/B([\p{L}']+)/grammar("participle") . " $1,"/eg;
	$line =~ s/\/G([\p{L}'\/G]*)/grammar("adverbial complement ") .
		join(", ", split("\/G", $1)) . ","/eg;
	$line =~ s/\/A/grammar("adjective") . ","/eg;
	$line =~ s/\/K([\p{L}]+)/grammar("gradable adjective with stem") . " $1,"/eg;
	$line =~ s/\/K/grammar("gradable adjective") . ","/eg;
	$line =~ s/\/L([\p{L}|#{}|]+)/" " . grammar("takes prefix") . " $1,"/eg;
	$line =~ s/\/N/grammar("noun, plural in") . " -n,"/eg;
	$line =~ s/\/S/grammar("noun, plural in") . " -s,"/eg;
	$line =~ s/\/E([\p{L}']*)/grammar("noun, plural in") . " -$1,"/eg;
	$line =~ s/\/I([\p{L}']*)/grammar("adjectival form with") . " -$1,"/eg;
	$line =~ s/\/D([\p{L}']+)/grammar("diminutive with root") . " $1,"/eg;
	$line =~ s/\/C/grammar("takes dative ending" . ",")/eg;
	$line =~ s/\/D/grammar("has diminutive") . ","/eg;
	$line =~ s/\/H//g;
	$line =~ s/\/X([-\p{L}#{}'|_]+)/grammar("plural ") . " $1,"/eg;
	$line =~ s/\/X/grammar("plural same as singular") . ","/eg;
	$line =~ s/\/P/grammar("preposition") . ","/eg;
	use utf8;
	$line =~ s/{([-\p{L}#"|״ ″]+)}/"(<span class='hebrew'>" .
		Internal_to_UTF(Yivo_2_Internal($1)) . "<\/span>)"/eg;
	$line =~ s/\[def: ([^]]+)\]/<span class='definition'>$1<\/span>/g;
	$line =~ s/\[adv\]/<span class='grammar'>adverb<\/span>,/g;
	$line =~ s/\[adj\]/<span class='grammar'>adjective<\/span>,/g;
	$line =~ s/\[interj\]/<span class='grammar'>interjection<\/span>,/g;
	$line =~ s/\[usage: ([^]]+)\]/<span class='grammar'>$1<\/span>,/g;
	$line =~ s/\[grammar: ([^]]+)\]/<span class='source'>$1<\/span>,/g;
	$line =~ s/\[origin: ([^]]+)\]/<span class='source'>origin: $1<\/span>,/g;
	$line =~ s/\[idiom: (.+) = ([^]]+)\]/$1 <span class='definition'>$2<\/span>/g;
	$line =~ s/\[note: V\]/<span class='source'>source: "vi zogt men af yidish"<\/span>/;
	$line =~ s/\[note: Y\]/<span class='source'>source: YIVO<\/span>/;
	$line =~ s/\[note: (.*)\]/<span class='source'>note: $1<\/span>/;
	$line =~ s/% ([\p{Lu}].*)/<span class='source'>source: $1<\/span>/;
	$line =~ s/% (.*)/<span class="source">$1<\/span>/;
	while ($line =~ /\[([^]]+)\]/) {
		my $content = $1;
		if ($content =~ /^[nmf\/]+$/) {
			$line =~ s/\[([^]]+)\]/grammar("gender $1,")/e;
		} else {
			$line =~ s/\[([^]]+)\]/grammar("$1,")/e;
		}
	}
	$line =~ s/^(\s*)(.*?)</$1<span class='lexeme'>$2<\/span></mg;
	$line =~ s/,\s*$//; # remove final comma that we added
	if ("span class source definition gender" =~ /$searchWord/) {
		# no way to find it within the entry
		$line = "<span class='weakmatch'>$line<\/span>";
	} else { # worth coloring
		$line =~ s/\b(\Q$searchWord\E)\b/<span class="goodmatch">$1<\/span>/gi;
		$line =~ s/(?<!>)(\Q$searchWord\E)/<span class="weakmatch">$1<\/span>/gi;
		$line =~ s/(\Q$searchWord\E(?!<))/<span class="weakmatch">$1<\/span>/gi;
	}
	print "$line\n";
} # printNicely

sub Yivo_2_Internal {
	my ($text) = @_;
    $text =~ s/ay/I/g; # pasakh tsvey-yud
    $text =~ s/ey/A/g; # tsvey-yud
	$text =~ s/oy/O/g; # vov-yud
	$text =~ s/u/w/g; # vov
	$text =~ s/iy/Jy/g; # khirik-yud yud
	$text =~ s/vw/vu/g; # tsvey-vov melupm-vov
	$text =~ s/wv/uv/g; # melupm-vov tsvey-vov
	$text =~ s/ww/uw/g; # melupm-vov vov
	$text =~ s/wi/wJ/g; # vov khirik-yud
	$text =~ s/(^|[^\w#~|]|_)([OAIiuw])/$1#$2/g; # shtumer alef
	$text =~ s/ie/Je/g; # khirik-yud ayin
	$text =~ s/ii/JJ/g; # khirik-yud khirik-yud
	$text =~ s/iw/Jw/g; # khirik-yud vov
	$text =~ s/Oi/OJ/g; # vov-yud khirik-yud
	$text =~ s/([aAeIoOu])i/$1J/g; # vowel khirik-yud
	$text =~ s/i([aAeIoOu])/J$1/g; # khirik-yud vowel
	$text =~ s/i/y/g; # yod
	$text =~ s/J/i/g; # khirik-yud
	$text =~ s/yy/|yi/g; # yud khirik-yud
	$text =~ s/kh/x/g; # khof
	$text =~ s/tsh/tS/g; # tes shin
	$text =~ s/ts/c/g; # tsadik
	$text =~ s/(\w|[#'"\x80-\x91]|\|)([nxfmc])($|[^\w^#~|\x80-\x91]|_)/$1\u$2$3/g; # final letters
		# must be at least a 2-letter word 
	$text =~ s/(\w[kh])It(N?)\b/$1At$2/g; # xxxkayt => xxxkeyt
	$text =~ s/sh/S/g; # shin
	$text =~ s/zh/zS/g; # zayin shin
	$text =~ s/dj/dzS/g; # daled zayin shin
	$text =~ s/\|//g; # remove prophylactic  |
	$text =~ s/J/i/g; # explicit pintl-yud
	$text =~ s/U/u/g; # explicit melupm-vov
	$text =~ s/V/w/g; # explicit single vov
	return($text);
} # Yivo_2_Internal

sub Internal_to_UTF {
	my ($text) = @_;
	use utf8;
	$text =~ s/n$/N/;
	$text =~ s/m$/M/;
	$text =~ s/f$/F/;
	$text =~ s/c$/C/;
	$text =~ s/x$/X/;
	$text =~ tr{#bgdhwzHtyXxlMmNnseFPCckrSTOv-ʼ}
	           {אבגדהוזחטיךכלםמןנסעףפץצקרשתױװ־'};
	$text =~ s/a/אַ/g;
	$text =~ s/B/בֿ/g;
	$text =~ s/K/כּ/g;
	$text =~ s/f/פֿ/g;
	$text =~ s/p/פּ/g;
	$text =~ s/Q/שׂ/g;
	$text =~ s/W/תּ/g;
	$text =~ s/I/ײַ/g;
	$text =~ s/A/ײ/g;
	$text =~ s/i/יִ/g;
	$text =~ s/o/אָ/g;
	$text =~ s/u/וּ/g;
	$text =~ s/ʼ/'/g; # not caught by tr above
	$text =~ s/\|//g; # not caught by tr above
	return $text;
	no utf8;
} # Internal_to_UTF

# return a list of base words given a full word
sub searchBase {
	my ($word) = @_;
	my $answer = '';
	open WORDS, $wordBaseFile or return($answer);	
	$/ = "\n";
	while (my $line = <WORDS>) {
		$line =~ /^([^:]+): (.*)/ or next;
		my ($expansions, $bases) = ($1, $2);
		if ($expansions eq $word) {
			$answer = $bases;
			last;
		}	
		last if $expansions gt $word;
	}
	close WORDS;
	return $answer;
} # searchBase

sub Yid_to_YIVO {
	my ($word) = @_;
	if ($word =~ /\p{Hebrew}/) {
		print "Converting <span class='hebrew'>$word<\/span> ";
		$word = `echo $word | 
			$wordDir/fixutf8.pl | \
			$wordDir/fixspell.pl | \
			$wordDir/e2i.pl -u | \
			$wordDir/i2y.pl`;
		$word =~ s/\s//g;
		print "to <span class='grammar'>$word<\/span><br/>\n";
	}
	return $word;
} # Yid_to_YIVO

sub doIt {
	my $searchWord = Untaint(decode_utf8(param('word')));
	$searchWord =~ s/^\s*//; # trim
	$searchWord =~ s/\s*$//;
	my $baseWord = Untaint(decode_utf8(param('base')));
	my $wholeWordOnly = defined(param('wholeWord'));
	# print "whole word only: $wholeWordOnly\n";
	if ($searchWord ne '' and open STATS, ">>/tmp/raphaelDict.stats") {
		binmode STATS, ":utf8";
		my ($sec,$min,$hour,$mday,$mon,$year,$wday,$yday,$isdst) =
			localtime(time);
		printf STATS "%04d.%02d.%02d %02d:%02d:%02d %s\n",
			$year + 1900, $mon+1, $mday, $hour, $min, $sec, $searchWord;
		close STATS;
	}
	my $analytics = readFile('analytics.txt');
	print header(-charset=>'UTF-8', -expires=>'-1d'),
		start_html(
			-encoding=>'UTF-8',
			-title=>'Yiddish dictionary lookup',
			-style=>{'src'=>'/~raphael/dictstyle.css'},
			-onload=>'document.getElementById("entry1").focus()',
			-meta=>{'viewport' => "width=device-width, maximum-scale=1.0"},
			-script=>$analytics,
			),
		"\n";
	printForm();
	$searchWord = Yid_to_YIVO($searchWord);
	print "" . br() . hr() . br();
	if ($baseWord ne '') {
		$baseWord = Yid_to_YIVO($baseWord);
		my $parts = searchBase($baseWord);
		if ($parts ne '') {
			print "The base word for <span class='grammar'>$baseWord</span> is
				<span class='goodmatch'>$parts</span><br/>";
			$searchWord = $parts;
			$searchWord =~ s/ .*//; # just the first one for now
			$wholeWordOnly = 1;
		} else {
			print "I can't find the base word for
				<span class='definition'>$baseWord</span>.<br/>";
			$searchWord = '';
		}
	}
	if ($searchWord =~ /^\s*$/) {
		print "Type in a word, followed by the enter key.";
	} else {
		my $success = 0;
		open WORDS, "<:utf8", $dictionaryFile or die("Can't read dictionary");
		$/ = "\n";
		my ($line, @printedLevels, $lastDepth, $lemmaDepth, $doPrint);
		$lastDepth = -1; # depth of previously output line
		$lemmaDepth = $maxDepth; # depth of current lemma that matches
		$doPrint = 0; # by default, don't print lines
		while ($line = <WORDS>) { # one line
			my $reduced = $line;
			$reduced =~ s/'//g;
			$line =~ /^(\t*)/;
			my $tabLength = length $1;
			if ($tabLength <= $lemmaDepth) { # forget about current lemma
				$lemmaDepth = $maxDepth;
			} 
			$contextLines[$tabLength] = $line;
			$doPrint = ($tabLength > $lemmaDepth); # print lines within lemma
			if (!$doPrint and
				(($wholeWordOnly and $reduced =~ /\b\Q$searchWord\E\b/i)
					or
					(!$wholeWordOnly and $reduced =~ /\Q$searchWord\E/i)
				)) { # new lemma
				$doPrint = 1;
				$success = 1;
				$lemmaDepth = $tabLength;
			}
			if ($doPrint) {	
				my $depth;
				for ($depth = 0; $depth <= $tabLength; $depth += 1) {
					$contextLines[$depth] = '' 
						unless defined($contextLines[$depth]);
					$printedLevels[$depth] = '' 
						unless defined($printedLevels[$depth]);
					if ($contextLines[$depth] ne $printedLevels[$depth]) {
						while ($lastDepth < $depth) {
							print "<li>" unless $depth == 0;
							print "<ul>";
							$lastDepth += 1;
						}
						while ($lastDepth > $depth) {
							print "</ul>";
							print "</li>";
							$lastDepth -= 1;
						}
						print "<li>";
						printNicely($contextLines[$depth], $searchWord);
						print "</li>\n";
						$lastDepth = $depth;
						$printedLevels[$depth] = $contextLines[$depth];
					} # print context lines and the lemma
				} # for indendation depth
			} # if doPrint 
		} # one line
		print "</ul>";
		while ($lastDepth > 0) {
			print "</li></ul>";
			$lastDepth -= 1;
		}
		close WORDS;
		if (!$success) {
			print "No results found for " . 
				"<span class='wrongtypein'>$searchWord</span>.
				Perhaps you didn't enter the base form; the dictionary does not
				contain inflected forms.\n";
			if ($searchWord =~ /^[A-Z]/) {
				$searchWord = lc $searchWord;
				print "You might try <span class='grammar'>$searchWord</span>" .
					" (without the capital letter) instead.\n";
			}
		} # failure
	} # given searchWord
	print "\n" . br() . hr() . br();
	printForm();
	print readFile('instructions.html');
	print end_html();
} # doIt

sub Untaint {
	my ($what) = @_;
	return '' unless defined $what;
	$what =~ s/[&*()`\$;|!"'<>\/]//g; # remove suspicious characters
	$what =~ /(.*)/; # untaint
	return($1);
} # Untaint

init();
doIt();

# vim:nospell:
