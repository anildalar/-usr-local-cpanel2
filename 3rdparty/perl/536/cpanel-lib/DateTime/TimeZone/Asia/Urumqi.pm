# This file is auto-generated by the Perl DateTime Suite time zone
# code generator (0.08) This code generator comes with the
# DateTime::TimeZone module distribution in the tools/ directory

#
# Generated from /tmp/e7yZMmQoJl/asia.  Olson data version 2022a
#
# Do not edit this file directly.
#
package DateTime::TimeZone::Asia::Urumqi;

use strict;
use warnings;
use namespace::autoclean;

our $VERSION = '2.52';

use Class::Singleton 1.03;
use DateTime::TimeZone;
use DateTime::TimeZone::OlsonDB;

@DateTime::TimeZone::Asia::Urumqi::ISA = ( 'Class::Singleton', 'DateTime::TimeZone' );

my $spans =
[
    [
DateTime::TimeZone::NEG_INFINITY, #    utc_start
60810199780, #      utc_end 1927-12-31 18:09:40 (Sat)
DateTime::TimeZone::NEG_INFINITY, #  local_start
60810220800, #    local_end 1928-01-01 00:00:00 (Sun)
21020,
0,
'LMT',
    ],
    [
60810199780, #    utc_start 1927-12-31 18:09:40 (Sat)
DateTime::TimeZone::INFINITY, #      utc_end
60810221380, #  local_start 1928-01-01 00:09:40 (Sun)
DateTime::TimeZone::INFINITY, #    local_end
21600,
0,
'+06',
    ],
];

sub olson_version {'2022a'}

sub has_dst_changes {0}

sub _max_year {2032}

sub _new_instance {
    return shift->_init( @_, spans => $spans );
}



1;

