# XML Methods

Lets go through come calls and examples that you can do for each XML method.

Remember that Binary data methods will not return xml; just the file/data you have requested.

## Non-Data Methods

## handshake

* MINIMUM_API_VERSION=380001

This is the function that handles verifying a new handshake Takes a timestamp, auth key, and username.

@param array $input
@return boolean

|Input      |Type   |Description|Optional|
|-----------|-------|-----------|-------:|
|'auth'     |string |$passphrase (Timestamp . Password SHA hash) OR (API Key)|NO      |
|'user'     |string |$username (Required if login/password authentication)|YES     |
|'timestamp'|integer|UNIXTIME() (Timestamp used in seed of password hash. Required if login/password authentication)|YES     |
|'version'  |string |$version (API Version that the application understands)|YES     |

```XML
<?xml version="1.0" encoding="UTF-8" ?>
<root>
	<auth><![CDATA[eeb9f1b6056246a7d563f479f518bb34]]></auth>
	<api><![CDATA[400004]]></api>
	<session_expire><![CDATA[2019-12-05T10:25:59+10:00]]></session_expire>
	<update><![CDATA[2019-11-26T16:35:05+10:00]]></update>
	<add><![CDATA[2019-12-05T05:35:58+10:00]]></add>
	<clean><![CDATA[2019-12-05T05:35:33+10:00]]></clean>
	<songs><![CDATA[269459]]></songs>
	<albums><![CDATA[25779]]></albums>
	<artists><![CDATA[11069]]></artists>
	<playlists><![CDATA[21]]></playlists>
	<videos><![CDATA[0]]></videos>
	<catalogs><![CDATA[4]]></catalogs>
</root>
```

## ping

* MINIMUM_API_VERSION=380001

This can be called without being authenticated, it is useful for determining if what the status of the server is, and what version it is running/compatible with
@param array $input

|Input |Type  |Description|Optional|
|------|------|-----------|-------:|
|'auth'|string|(Session ID) destroys the session if it exists|YES      |

```XML
<?xml version="1.0" encoding="UTF-8" ?>
<root>
	<session_expire><![CDATA[2019-12-05T10:26:43+10:00]]></session_expire>
	<server><![CDATA[4.2.0-develop]]></server>
	<version><![CDATA[400004]]></version>
	<compatible><![CDATA[350001]]></compatible>
</root>
```

## goodbye

* MINIMUM_API_VERSION=400001

Destroy a session using the auth parameter.

@param array $input

|Input |Type  |Description|Optional|
|------|------|-----------|-------:|
|'auth'|string|(Session ID) returns version information and extends the session if passed|NO     |

```XML
<?xml version="1.0" encoding="UTF-8" ?>
<root>
	<success code="1"><![CDATA[goodbye: eeb9f1b6056246a7d563f479f518bb34]]></success>
</root>
```

## url_to_song

* MINIMUM_API_VERSION=380001

This takes a url and returns the song object in question
@param array $input

|Input|Type|Description|Optional|
|-----|----|-----------|-------:|
|'url'|string|Full Ampache URL from server, translates back into a song XML|NO      |

```XML
<?xml version="1.0" encoding="UTF-8" ?>
<root>
<total_count>1</total_count>
<song id="164215">
	<title><![CDATA[!]]></title>
	<name><![CDATA[!]]></name>
	<artist id="8526"><![CDATA[Hellyeah]]></artist>
	<album id="56038"><![CDATA[Unden!able]]></album>
	<tag id="20" count="1" ><![CDATA[Metal]]></tag>
	<tag id="37" count="1" ><![CDATA[Hard Rock]]></tag>
	<filename><![CDATA[/mnt/music/Hellyeah/(2016) Unden!able [ESM 171-2]/101 - !.mp3]]></filename>
	<track>1</track>
	<time>79</time>
	<year>2016</year>
	<bitrate>320000</bitrate>
	<rate>44100</rate>
	<mode>cbr</mode>
	<mime>audio/mpeg</mime>
	<url><![CDATA[https://music.com.au/play/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=164215&uid=2&player=api&name=Hellyeah%20-%20-.mp3]]></url>
	<size>3184944</size>
	<mbid>42bb2b7a-bf67-4cc4-8610-25399d56474b</mbid>
	<album_mbid></album_mbid>
	<artist_mbid></artist_mbid>
	<albumartist_mbid></albumartist_mbid>
	<art><![CDATA[https://music.com.au/image.php?object_id=56038&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<composer><![CDATA[]]></composer>
	<channels></channels>
	<comment><![CDATA[]]></comment>
	<publisher><![CDATA[Eleven Seven Music]]></publisher>
	<language></language>
	<replaygain_album_gain>0.000000</replaygain_album_gain>
	<replaygain_album_peak>0.000000</replaygain_album_peak>
	<replaygain_track_gain>-6.920000</replaygain_track_gain>
	<replaygain_track_peak>1.000000</replaygain_track_peak>
	<genre><![CDATA[Metal]]></genre>
	<genre><![CDATA[Hard Rock]]></genre>
</song>
</root>
```

## Data Methods

## get_indexes

* MINIMUM_API_VERSION=400001

This takes a collection of inputs and returns ID + name for the object type
@param array $input
@return boolean

|Input   |Type   |Description                          |Optional|
|--------|-------|-------------------------------------|-------:|
|'type'  |string |'song', 'album', 'artist', 'playlist'|NO      |
|'filter'|string |                                     |YES     |
|'add'   |set_filter|ISO 8601 Date Format assumed filter method is newer then specified date, however [START]/[END] can be specified to receive only results added between two dates|YES     |
|'update'|set_filter|ISO 8601 Date Format assumed filter method is newer then specified date, however [START]/[END] can be specified to receive only results updated between two dates|YES     |
|'offset'|integer|                                     |YES     |
|'limit' |integer|                                     |YES     |

SONGS
```XML
<?xml version="1.0" encoding="UTF-8" ?>
<root>
<total_count>4</total_count>
<song id="953">
	<title><![CDATA[Wishmaster]]></title>
	<name><![CDATA[Wishmaster]]></name>
		<artist id="55"><![CDATA[Nightwish]]></artist>
		<album id="48753"><![CDATA[Wishmaster]]></album>
</song>
<song id="955">
	<title><![CDATA[Wanderlust]]></title>
	<name><![CDATA[Wanderlust]]></name>
		<artist id="55"><![CDATA[Nightwish]]></artist>
		<album id="48753"><![CDATA[Wishmaster]]></album>
</song>
<song id="956">
	<title><![CDATA[Come Cover Me]]></title>
	<name><![CDATA[Come Cover Me]]></name>
		<artist id="55"><![CDATA[Nightwish]]></artist>
		<album id="48753"><![CDATA[Wishmaster]]></album>
</song>
<song id="958">
	<title><![CDATA[Dead Boy's Poem]]></title>
	<name><![CDATA[Dead Boy's Poem]]></name>
		<artist id="55"><![CDATA[Nightwish]]></artist>
		<album id="48753"><![CDATA[Wishmaster]]></album>
</song>
</root>
```

ARTIST
```XML
<?xml version="1.0" encoding="UTF-8" ?>
<root>
<total_count>4</total_count>
<artist id="13429">
	<name><![CDATA[!!!]]></name>
		<album id="71670"><![CDATA[Softcore Jukebox]]></album>
</artist>
<artist id="3858">
	<name><![CDATA[!Bang Elektronika]]></name>
		<album id="51047"><![CDATA[Aktivierung!]]></album>
</artist>
<artist id="2461">
	<name><![CDATA[!distain]]></name>
		<album id="67480"><![CDATA[Farewell to the Past]]></album>
		<album id="38481"><![CDATA[The Archive Collection 1992-2016]]></album>
</artist>
<artist id="1206">
	<name><![CDATA["Weird Al" Yankovic]]></name>
		<album id="50055"><![CDATA[Mandatory Fun]]></album>
		<album id="70304"><![CDATA[Captain Underpants: The First Epic Movie (Original Motion Picture Soundtrack)]]></album>
</artist>
</root>
```

ALBUM
```XML
<?xml version="1.0" encoding="UTF-8" ?>
<root>
<total_count>4</total_count>
<album id="54130">
	<name><![CDATA["...Famous Last Words..."]]></name>
		<artist id="6778"><![CDATA[Supertramp]]></artist>
</album>
<album id="63679">
	<name><![CDATA["Bettin' on a Longshot" The Singles Collection]]></name>
		<artist id="9303"><![CDATA[Harrington Saints]]></artist>
</album>
<album id="62167">
	<name><![CDATA["C" Is for (Please Insert Sophomoric Genitalia Reference HERE)]]></name>
		<artist id="474"><![CDATA[Puscifer]]></artist>
</album>
<album id="70157">
	<name><![CDATA[The "Chirping" Crickets]]></name>
		<artist id="15540"><![CDATA[Crickets]]></artist>
</album>
</root>
```

PLAYLIST
```XML
<?xml version="1.0" encoding="UTF-8" ?>
<root>
<total_count>4</total_count>
<playlist id="2002">
	<name><![CDATA[familyradio]]></name>
		<playlisttrack>49176</playlisttrack>
		<playlisttrack>49175</playlisttrack>
		<playlisttrack>49174</playlisttrack>
		<playlisttrack>49173</playlisttrack>
		<playlisttrack>776801</playlisttrack>
		<playlisttrack>129079</playlisttrack>
		<playlisttrack>169453</playlisttrack>
		<playlisttrack>21535</playlisttrack>
		<playlisttrack>21534</playlisttrack>
		<playlisttrack>21533</playlisttrack>
		<playlisttrack>21532</playlisttrack>
		<playlisttrack>21531</playlisttrack>
		<playlisttrack>21530</playlisttrack>
		<playlisttrack>21529</playlisttrack>
		<playlisttrack>21528</playlisttrack>
		<playlisttrack>21527</playlisttrack>
		<playlisttrack>861052</playlisttrack>
		<playlisttrack>861051</playlisttrack>
		<playlisttrack>861050</playlisttrack>
		<playlisttrack>861049</playlisttrack>
		<playlisttrack>1185</playlisttrack>
		<playlisttrack>1184</playlisttrack>
		<playlisttrack>1183</playlisttrack>
		<playlisttrack>1182</playlisttrack>
		<playlisttrack>1181</playlisttrack>
		<playlisttrack>1180</playlisttrack>
		<playlisttrack>1179</playlisttrack>
		<playlisttrack>1178</playlisttrack>
		<playlisttrack>124562</playlisttrack>
		<playlisttrack>124563</playlisttrack>
		<playlisttrack>124564</playlisttrack>
</playlist>
</root>
```

## advanced_search

* MINIMUM_API_VERSION=380001
* CHANGED_IN_API_VERSION=400001

### Changes to text searches

* 'is not' has been added shifting values down the list.
  0=contains, 1=does not contain, 2=starts with, 3=ends with
  4=is, 5=is not, 6=sounds like, 7=does not sound like
* rule_1['name'] is depreciated. Instead of rule_1['name'] use rule_1['title'] (I have put a temp workaround into the search rules to alleviate this change for any existing apps)

### Using advanced_search

Perform an advanced search given passed rules. This works in a similar way to the web/UI search pages.
You can pass multiple rules as well as joins to create in depth search results

Rules must be sent in groups of 3 using an int (starting from 1) to designate which rules are combined.
Use operator ('and'|'or') to choose whether to join or separate each rule when searching.

* Rule arrays must contain the following:
  * rule name (e.g. rule_1['title'], rule_2['album'])
  * rule operator (e.g. rule_1_operator[0], rule_2_operator[3])
  * rule input (e.g. rule_1_input['Prodigy'], rule_2_input['Land'])

Select the type of search based on the type of data you are searching for. (songs, playlists, etc)

|rule_1        |Title                |Type             |Valid Items          |Description                           |
|--------------|---------------------|-----------------|:-------------------:|--------------------------------------|
|anywhere      |Any searchable text  |text             |song                 |                                      |
|title         |Title / Name         |text             |song,album,artist,playlist,label|                           |
|favorite      |Favorites            |text             |song, album, artist  |                                      |
|playlist_name |Playlist Name        |text             |song                 |                                      |
|album         |Album                |text             |song                 |                                      |
|artist        |Artist               |text             |song,album           |                                      |
|composer      |Composer             |text             |song                 |                                      |
|comment       |Comment              |text             |song                 |                                      |
|label         |Label                |text             |song                 |                                      |
|tag           |Tag                  |tags             |song,album,artist    |Tag/Genre                             |
|album_tag     |Album tag            |tags             |song                 |Album Tag/Genre                       |
|artist_tag    |Artist tag           |tags             |song                 |Artist Tag/Genre                      |
|filename      |Filename             |text             |song,video           |File path                             |
|placeformed   |Place                |text             |artist               |                                      |
|username      |Username             |text             |user                 |                                      |
|year          |Year                 |numeric          |song,album           |                                      |
|time          |Length (in minutes)  |numeric          |song,album           |                                      |
|rating        |Rating (Average)     |numeric          |song,album,artist    |                                      |
|myrating      |My Rating            |numeric          |song,album,artist    |                                      |
|artistrating  |My Rating (Artist)   |numeric          |song,album           |                                      |
|albumrating   |My Rating (Album)    |numeric          |song                 |                                      |
|played_times  |# Played             |numeric          |song,album,artist    |Number of times object has been played|
|bitrate       |Bitrate              |numeric          |song                 |File Bitrate                          |
|image height  |Image Height         |numeric          |album,artist         |                                      |
|image width   |Image Width          |numeric          |album,artist         |                                      |
|yearformed    |Year                 |numeric          |artist               |                                      |
|played        |Played               |boolean          |song                 |                                      |
|myplayed      |Played by Me         |boolean          |song                 |                                      |
|myplayedartist|Played by Me (Artist)|boolean          |song                 |                                      |
|myplayedalbum |Played by Me (Album) |boolean          |song                 |                                      |
|last_play     |My Last Play         |days             |song,album,artist    |Days since the song was played        |
|added         |Added                |date             |song                 |                                      |
|updated       |Updated              |date             |song                 |                                      |
|catalog       |Catalog              |boolean_numeric  |song,album           |                                      |
|other_user    |Another User         |user_numeric     |song,album,artist    |Search if a another user has loved or rated a song|
|other_user_album|Another User       |user_numeric     |song    |Search if a another user has loved or rated an album|
|other_user_artist|Another User      |user_numeric     |song    |Search if a another user has loved or rated an artist|
|playlist      |Playlist             |boolean_numeric  |song                 |                                      |
|licensing     |Music License        |boolean_numeric  |song                 |                                      |
|smartplaylist |Smart Playlist       |boolean_subsearch|song                 |                                      |
|metadata      |Metadata             |metadata (multiple types)|song                 |                                      |

Select your operator (integer only!) based on the type or your selected search

|rule_1_operator|Text / Tags / Metadata          |Numeric / user_numeric                       |Date     |Boolean, Numeric, Subsearch / Days|        
|:-------------:|-------------------------------|---------------------------------------------|---------|----------------------------------|
|0              |contains                       |is greater than or equal to / has loved      |before   |is true / before (x) days ago     |
|1              |does not contain               |is less than or equal to / has rated 5 stars |after    |is false / after (x) days ago     |
|2              |starts with                    |is / has rated 4 stars                       |         |                                  |
|3              |ends with                      |is not / has rated 3 stars                   |         |                                  |
|4              |is                             |is greater than / has rated 2 stars          |         |                                  |
|5              |is not                         |is less than / has rated 1 stars             |         |                                  |
|6              |sounds like (Text Only)        |                                             |         |                                  |
|7              |does not sound like (Text Only)|                                             |         |                                  |

Send the correct input based on the type of search.

|rule_1_input|
|------------|
|text        |
|integer     |
|boolean     |

**NOTE** To search metadata you need to add a 4th rule "rule_X_subtype"
Operators for metadata are using the text/tag types **AND** numeric types in a single list as they can be ints/strings/dates.
Currently there is not a simple way to identify what metadata types you have saved. New methods will be created for this.

|rule_1_operator | Metadata |
|-- | -- |
|0 | contains | 
|1 | does not contain |
|2 | starts with |
|3 | ends with | 
|4 | is |
|5 | is not |
|6 | sounds like (Text Only) |
|7 | does not sound like (Text Only)|
|8 | is greater than or equal to|
|9 | is less than or equal to|
|10 | is |
|11 | is not |
|12 | is greater than |
|13 |is less than |

To search a mixed type like metadata you must search using 4 rules.
* Search rule 1 for band containing 'Prodigy', Search Rule 2 for bbm > 120
  * rule name (e.g. rule_1['metadata'], rule_2['metadata'])
  * rule operator (e.g. rule_1_operator[0], rule_2_operator[12])
  * rule input (e.g. rule_1_input['Prodigy'], rule_2_input['120'])
  * rule subtype (e.g. rule_1_subtype['4'], rule_2_subtype['9'])

@param array $input

    INPUTS
    * ampache_url = (string)
    * ampache_API = (string)
    * operator = (string) 'and'|'or' (whether to match one rule or all)
    * rules = (array) = [[rule_1,rule_1_operator,rule_1_input], [rule_2,rule_2_operator,rule_2_input], [etc]]
    * type = (string) 'song', 'album', 'artist', 'playlist', 'label', 'user', 'video'
    * offset = (integer)
    * limit' = (integer)

SONG
```XML
<?xml version="1.0" encoding="UTF-8" ?>
<root>
<total_count>1</total_count>
<song id="16775">
	<title><![CDATA[Who U Foolin]]></title>
	<name><![CDATA[Who U Foolin]]></name>
	<artist id="605"><![CDATA[The Prodigy]]></artist>
	<album id="49370"><![CDATA[Hotride]]></album>
	<tag id="4" count="1" ><![CDATA[Electronic]]></tag>
	<filename><![CDATA[/mnt/music/The Prodigy/(2004) Hotride/102 - Who U Foolin.mp3]]></filename>
	<track>2</track>
	<time>220</time>
	<year>2004</year>
	<bitrate>202932</bitrate>
	<rate>44100</rate>
	<mode>vbr</mode>
	<mime>audio/mpeg</mime>
	<url><![CDATA[https://music.com.au/play/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=16775&uid=4&player=api&name=The%20Prodigy%20-%20Who%20U%20Foolin.mp3]]></url>
	<size>5594186</size>
	<mbid>37131e8a-8e45-4980-8f8f-04ae9658aaa6</mbid>
	<album_mbid></album_mbid>
	<artist_mbid></artist_mbid>
	<albumartist_mbid></albumartist_mbid>
	<art><![CDATA[https://music.com.au/image.php?object_id=49370&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<composer><![CDATA[The Prodigy]]></composer>
	<channels></channels>
	<comment><![CDATA[single]]></comment>
	<publisher><![CDATA[XL Recordings]]></publisher>
	<language></language>
	<replaygain_album_gain>0.000000</replaygain_album_gain>
	<replaygain_album_peak>0.000000</replaygain_album_peak>
	<replaygain_track_gain>-8.660000</replaygain_track_gain>
	<replaygain_track_peak>1.000000</replaygain_track_peak>
	<encoding><![CDATA[UTF-8]]></encoding>
	<disk><![CDATA[1]]></disk>
	<totaldisks><![CDATA[1]]></totaldisks>
	<band><![CDATA[The Prodigy]]></band>
	<release_type><![CDATA[single]]></release_type>
	<barcode><![CDATA[634904120221]]></barcode>
	<audio_codec><![CDATA[mp3]]></audio_codec>
	<recording_time><![CDATA[2004-11-01]]></recording_time>
	<bpm><![CDATA[126]]></bpm>
	<album_artist_sort_order><![CDATA[Prodigy, The]]></album_artist_sort_order>
	<performer_sort_order><![CDATA[Prodigy, The]]></performer_sort_order>
	<media_type><![CDATA[CD]]></media_type>
	<original_release_time><![CDATA[2004-11-01]]></original_release_time>
	<totaltracks><![CDATA[4]]></totaltracks>
	<genre><![CDATA[Electronic]]></genre>
</song>
</root>
```

ARTIST
```XML
<?xml version="1.0" encoding="UTF-8" ?>
<root>
<total_count>4</total_count>
<artist id="58">
	<name><![CDATA[Ratatat]]></name>
	<tag id="6" count="1" ><![CDATA[Rock]]></tag>
	<tag id="16" count="1" ><![CDATA[Alternative]]></tag>
	<tag id="36" count="1" ><![CDATA[Indie Rock]]></tag>
	<tag id="55" count="1" ><![CDATA[Electro]]></tag>
	<tag id="77" count="1" ><![CDATA[Experimental]]></tag>
	<tag id="4" count="1" ><![CDATA[Electronic]]></tag>
	<albums>2</albums>
	<songs>25</songs>
	<art><![CDATA[https://music.com.au/image.php?object_id=58&object_type=artist&auth=eeb9f1b6056246a7d563f479f518bb34]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<mbid>f467181e-d5e0-4285-b47e-e853dcc89ee7</mbid>
	<summary><![CDATA[Ratatat, from Brooklyn, New York, United States is an electronic music duo: guitarist Mike Stroud and synthesizer driver and producer Evan Mast (E*Vax).

Stroud and Mast originally met as students at Skidmore College, but did not work together musically until 2001, when their project was named Cherry (later the name of the final song on their debut album). Written and recorded in the bedroom of Mast's Crown Heights, Brooklyn apartment, the band's debut album Ratatat for XL Recordings was released in 2004. ]]></summary>
	<yearformed>0</yearformed>
	<placeformed><![CDATA[]]></placeformed>
</artist>
<artist id="145">
	<name><![CDATA[Nine Inch Nails]]></name>
	<tag id="3" count="1" ><![CDATA[Punk]]></tag>
	<tag id="4" count="1" ><![CDATA[Electronic]]></tag>
	<tag id="6" count="1" ><![CDATA[Rock]]></tag>
	<tag id="9" count="1" ><![CDATA[Industrial]]></tag>
	<tag id="11" count="1" ><![CDATA[Techno]]></tag>
	<tag id="28" count="1" ><![CDATA[House]]></tag>
	<tag id="33" count="1" ><![CDATA[Alternative Rock]]></tag>
	<tag id="36" count="1" ><![CDATA[Indie Rock]]></tag>
	<tag id="43" count="1" ><![CDATA[Soundtrack]]></tag>
	<tag id="46" count="1" ><![CDATA[Ambient]]></tag>
	<albums>23</albums>
	<songs>195</songs>
	<art><![CDATA[https://music.com.au/image.php?object_id=145&object_type=artist&auth=eeb9f1b6056246a7d563f479f518bb34]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<mbid>b7ffd2af-418f-4be2-bdd1-22f8b48613da</mbid>
	<summary><![CDATA[
Nine Inch Nails is an Industrial rock band that was formed in 1988 in Cleveland, Ohio, United States by Trent Reznor, the only constant member of the band. Reznor is generally credited for popularizing the genre known as "industrial rock" with both his releases and dark, theatrical music videos. As of 2016, the band also officially includes Reznor's longtime collaborator Atticus Ross as a second official member.

Born Michael Trent Reznor, he was raised by his maternal grandparents in Mercer, Pennsylvania, USA. ]]></summary>
	<yearformed>0</yearformed>
	<placeformed><![CDATA[]]></placeformed>
</artist>
<artist id="559">
	<name><![CDATA[José González]]></name>
	<tag id="6" count="1" ><![CDATA[Rock]]></tag>
	<tag id="22" count="1" ><![CDATA[Pop]]></tag>
	<tag id="36" count="1" ><![CDATA[Indie Rock]]></tag>
	<tag id="70" count="1" ><![CDATA[Folk]]></tag>
	<tag id="378" count="1" ><![CDATA[Acoustic]]></tag>
	<tag id="1396" count="1" ><![CDATA[Folk Rock]]></tag>
	<tag id="2367" count="1" ><![CDATA[Folk World & Country]]></tag>
	<albums>3</albums>
	<songs>31</songs>
	<art><![CDATA[https://music.com.au/image.php?object_id=559&object_type=artist&auth=eeb9f1b6056246a7d563f479f518bb34]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<mbid>cd8c5019-5d75-4d5c-bc28-e1e26a7dd5c8</mbid>
	<summary><![CDATA[José González (born 1978 in Gothenburg, Sweden) is a Swedish indie folk singer-songwriter and guitarist (of Argentinian extraction). In 2003, he released his debut album, Veneer, in Europe. The album has since been released in the UK, on April 25, 2005, and in the United States on September 6, 2005. González is also a member of the Swedish band Junip, along with Elias Araya and Tobias Winterkorn.

The song Crosses, from Crosses EP and the later Veneer ]]></summary>
	<yearformed>0</yearformed>
	<placeformed><![CDATA[]]></placeformed>
</artist>
<artist id="704">
	<name><![CDATA[Robert Rich]]></name>
	<tag id="4" count="1" ><![CDATA[Electronic]]></tag>
	<tag id="19" count="1" ><![CDATA[New Age]]></tag>
	<tag id="31" count="1" ><![CDATA[Other]]></tag>
	<tag id="46" count="1" ><![CDATA[Ambient]]></tag>
	<tag id="53" count="1" ><![CDATA[Dark Ambient]]></tag>
	<tag id="77" count="1" ><![CDATA[Experimental]]></tag>
	<tag id="80" count="1" ><![CDATA[Trance]]></tag>
	<albums>6</albums>
	<songs>45</songs>
	<art><![CDATA[https://music.com.au/image.php?object_id=704&object_type=artist&auth=eeb9f1b6056246a7d563f479f518bb34]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<mbid>93209865-ebeb-4346-96a5-f64305cd0185</mbid>
	<summary><![CDATA[Robert Rich (born August 23, 1963) is an ambient musician and composer based in San Francisco, California, United States.

With a musical career spanning three decades and over 30 albums, Robert Rich has helped define the genres of ambient music, dark ambient, tribal ambient and trance, yet his music remains hard to categorize. Part of his unique sound comes from using home-made acoustic and electronic instruments, microtonal harmonies, computer-based signal processing, chaotic systems and feedback networks. ]]></summary>
	<yearformed>0</yearformed>
	<placeformed><![CDATA[]]></placeformed>
</artist>
</root>

```

ALBUM
```XML
<?xml version="1.0" encoding="UTF-8" ?>
<root>
<total_count>4</total_count>
<album id="57887">
	<name><![CDATA[(It (Is) It) Critical Band]]></name>
	<artist id="9205"><![CDATA[90 Day Men / GoGoGoAirheart]]></artist>
	<year>2000</year>
	<tracks>8</tracks>
	<disk>1</disk>
	<tag id="674" count="1" ><![CDATA[Math Rock]]></tag>
	<tag id="1415" count="1" ><![CDATA[Post Rock]]></tag>
	<art><![CDATA[https://music.com.au/image.php?object_id=57887&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<mbid>d6fc36cc-9351-4b53-b7db-7f5b30804800</mbid>
</album>
<album id="43867">
	<name><![CDATA[(It's Not Me) Talking]]></name>
	<artist id="1229"><![CDATA[Flock of Seagulls]]></artist>
	<year>1983</year>
	<tracks>4</tracks>
	<disk>1</disk>
	<art><![CDATA[https://music.com.au/image.php?object_id=43867&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<mbid></mbid>
</album>
<album id="33429">
	<name><![CDATA[+-]]></name>
	<artist id="456"><![CDATA[Joy Division]]></artist>
	<year>2010</year>
	<tracks>19</tracks>
	<disk>9</disk>
	<tag id="73" count="1" ><![CDATA[Post-Punk]]></tag>
	<tag id="6" count="1" ><![CDATA[Rock]]></tag>
	<tag id="36" count="1" ><![CDATA[Indie Rock]]></tag>
	<tag id="48" count="1" ><![CDATA[New Wave]]></tag>
	<art><![CDATA[https://music.com.au/image.php?object_id=33429&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<mbid>85bd4a0e-d28a-442c-922e-394b939e7af9</mbid>
</album>
<album id="52825">
	<name><![CDATA[...and Justice for All]]></name>
	<artist id="563"><![CDATA[Metallica]]></artist>
	<year>1988</year>
	<tracks>9</tracks>
	<disk>1</disk>
	<tag id="20" count="1" ><![CDATA[Metal]]></tag>
	<tag id="64" count="1" ><![CDATA[Heavy Metal]]></tag>
	<tag id="86" count="1" ><![CDATA[Thrash Metal]]></tag>
	<art><![CDATA[https://music.com.au/image.php?object_id=52825&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<mbid>cb2704e5-b7a3-343e-918f-aa9cd3489170</mbid>
</album>
</root>

```

## artists

* MINIMUM_API_VERSION=380001

This takes a collection of inputs and returns artist objects.

@param array $input

|Input    |Type|Description|Optional|
|---------|----|-----------|-------:|
|'filter' |    |Value is Alpha Match for returned results, may be more than one letter/number|YES     |
|'exact'  |boolean|if true filter is exact rather then fuzzy|YES     |
|'add'    |set_filter|ISO 8601 Date Format assumed filter method is newer then specified date, however [START]/[END] can be specified to receive only results added between two dates|YES     |
|'update' |set_filter|ISO 8601 Date Format assumed filter method is newer then specified date, however [START]/[END] can be specified to receive only results updated between two dates|YES     |
|'offset' |    |           |YES     |
|'limit'  |    |           |YES     |
|'include'|array|Array specified using GET convention, can contain `albums` or `songs` and will include the corresponding XML nested in the artist XML|NO      |

```XML
<?xml version="1.0" encoding="UTF-8" ?>
<root>
<total_count>4</total_count>
<album id="57887">
	<name><![CDATA[(It (Is) It) Critical Band]]></name>
	<artist id="9205"><![CDATA[90 Day Men / GoGoGoAirheart]]></artist>
	<year>2000</year>
	<tracks>8</tracks>
	<disk>1</disk>
	<tag id="674" count="1" ><![CDATA[Math Rock]]></tag>
	<tag id="1415" count="1" ><![CDATA[Post Rock]]></tag>
	<art><![CDATA[https://music.com.au/image.php?object_id=57887&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<mbid>d6fc36cc-9351-4b53-b7db-7f5b30804800</mbid>
</album>
<album id="43867">
	<name><![CDATA[(It's Not Me) Talking]]></name>
	<artist id="1229"><![CDATA[Flock of Seagulls]]></artist>
	<year>1983</year>
	<tracks>4</tracks>
	<disk>1</disk>
	<art><![CDATA[https://music.com.au/image.php?object_id=43867&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<mbid></mbid>
</album>
<album id="33429">
	<name><![CDATA[+-]]></name>
	<artist id="456"><![CDATA[Joy Division]]></artist>
	<year>2010</year>
	<tracks>19</tracks>
	<disk>9</disk>
	<tag id="73" count="1" ><![CDATA[Post-Punk]]></tag>
	<tag id="6" count="1" ><![CDATA[Rock]]></tag>
	<tag id="36" count="1" ><![CDATA[Indie Rock]]></tag>
	<tag id="48" count="1" ><![CDATA[New Wave]]></tag>
	<art><![CDATA[https://music.com.au/image.php?object_id=33429&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<mbid>85bd4a0e-d28a-442c-922e-394b939e7af9</mbid>
</album>
<album id="52825">
	<name><![CDATA[...and Justice for All]]></name>
	<artist id="563"><![CDATA[Metallica]]></artist>
	<year>1988</year>
	<tracks>9</tracks>
	<disk>1</disk>
	<tag id="20" count="1" ><![CDATA[Metal]]></tag>
	<tag id="64" count="1" ><![CDATA[Heavy Metal]]></tag>
	<tag id="86" count="1" ><![CDATA[Thrash Metal]]></tag>
	<art><![CDATA[https://music.com.au/image.php?object_id=52825&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<mbid>cb2704e5-b7a3-343e-918f-aa9cd3489170</mbid>
</album>
</root>

```

## artist

* MINIMUM_API_VERSION=380001

This returns a single artist based on the UID of said artist
@param array $input

|Input    |Type|Description|Optional|
|---------|----|-----------|-------:|
|'filter' |    |UID of Artist, returns artist XML|NO      |
|'include'|array|Array specified using GET convention, can contain `albums` or `songs` and will include the corresponding XML nested in the artist XML|NO      |

```XML
<?xml version="1.0" encoding="UTF-8" ?>
<root>
<total_count>1</total_count>
<artist id="13429">
	<name><![CDATA[!!!]]></name>
	<tag id="55" count="1" ><![CDATA[Electro]]></tag>
	<albums>1</albums>
	<songs>1</songs>
	<art><![CDATA[https://music.com.au/image.php?object_id=13429&object_type=artist&auth=eeb9f1b6056246a7d563f479f518bb34]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<mbid>f26c72d3-e52c-467b-b651-679c73d8e1a7</mbid>
	<summary><![CDATA[!!! is an American dance-punk band from  Sacramento, California that formed in Autumn 1996 from the former band members of The Yah Mos, Black Liquorice and Popesmashers.

After a tour together, members of local Sacramento, CA bands Black Liquorice and Popesmashers formed !!!. The band's name was inspired by the subtitles of the movie The Gods Must Be Crazy, in which the mouth-clicking sounds of the Bushmen were represented as "!". Chk Chk Chk is the most common pronunciation ]]></summary>
	<yearformed>0</yearformed>
	<placeformed><![CDATA[]]></placeformed>
</artist>
</root>
```

## artist_albums

* MINIMUM_API_VERSION=380001

This returns the albums of an artist
@param array $input

|Input   |Type|Description|Optional|
|--------|----|-----------|-------:|
|'filter'|    |UID of Artist, returns Album XML|NO      |
|'offset'|    |           |YES     |
|'limit' |    |           |YES     |

```XML
<?xml version="1.0" encoding="UTF-8" ?>
<root>
<total_count>1</total_count>
<album id="67123">
	<name><![CDATA[Softcore Jukebox]]></name>
	<artist id="1009"><![CDATA[Ladytron]]></artist>
	<year>2003</year>
	<tracks>18</tracks>
	<disk>1</disk>
	<tag id="4" count="1" ><![CDATA[Electronic]]></tag>
	<tag id="55" count="1" ><![CDATA[Electro]]></tag>
	<art><![CDATA[https://music.com.au/image.php?object_id=67123&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<mbid>b6cbb7a5-a0c2-47f8-93a2-7157874249eb</mbid>
</album>
</root>
```

## artist_songs

* MINIMUM_API_VERSION=380001

This returns the songs of the specified artist
@param array $input

|Input   |Type|Description|Optional|
|--------|----|-----------|-------:|
|'filter'|    |UID of Artist, returns Song XML|NO      |
|'offset'|    |           |YES     |
|'limit' |    |           |YES     |

```XML
<?xml version="1.0" encoding="UTF-8" ?>
<root>
<total_count>1</total_count>
<song id="857257">
	<title><![CDATA[Feel Good Hit of the Fall]]></title>
	<name><![CDATA[Feel Good Hit of the Fall]]></name>
	<artist id="13429"><![CDATA[!!!]]></artist>
	<album id="67123"><![CDATA[Softcore Jukebox]]></album>
	<tag id="55" count="1" ><![CDATA[Electro]]></tag>
	<filename><![CDATA[/mnt/music/Ladytron/(2003) Softcore Jukebox [EMN 7071-2]/109 - Feel Good Hit of the Fall.flac]]></filename>
	<track>9</track>
	<time>314</time>
	<year>2003</year>
	<bitrate>972192</bitrate>
	<rate>44100</rate>
	<mode>vbr</mode>
	<mime>audio/x-flac</mime>
	<url><![CDATA[https://music.com.au/play/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=857257&uid=2&player=api&name=-%20-%20Feel%20Good%20Hit%20of%20the%20Fall.flac]]></url>
	<size>38262252</size>
	<mbid>388170b3-ae1d-4adb-b116-4e046e0f60e8</mbid>
	<album_mbid></album_mbid>
	<artist_mbid></artist_mbid>
	<albumartist_mbid></albumartist_mbid>
	<art><![CDATA[https://music.com.au/image.php?object_id=67123&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<composer><![CDATA[]]></composer>
	<channels></channels>
	<comment><![CDATA[]]></comment>
	<publisher><![CDATA[]]></publisher>
	<language></language>
	<replaygain_album_gain>0.000000</replaygain_album_gain>
	<replaygain_album_peak>0.000000</replaygain_album_peak>
	<replaygain_track_gain>0.000000</replaygain_track_gain>
	<replaygain_track_peak>0.000000</replaygain_track_peak>
	<genre><![CDATA[Electro]]></genre>
</song>
</root>
```

## albums

* MINIMUM_API_VERSION=380001

This returns albums based on the provided search filters
@param array $input

|Input    |Type|Description|Optional|
|---------|----|-----------|-------:|
|'filter' |string|Value is Alpha Match for returned results, may be more than one letter/number|YES     |
|'exact'  |boolean|if true filter is exact rather then fuzzy|NO      |
|'add'    |set_filter|ISO 8601 Date Format assumed filter method is newer then specified date, however [START]/[END] can be specified to receive only results added between two dates|YES     |
|'update' |set_filter|ISO 8601 Date Format assumed filter method is newer then specified date, however [START]/[END] can be specified to receive only results updated between two dates|YES     |
|'offset' |    |           |YES     |
|'limit'  |    |           |YES     |
|'include'|array|Array specified using GET convention, can contain `songs` and will include the corresponding XML nested in the album XML|YES     |

```XML
<?xml version="1.0" encoding="UTF-8" ?>
<root>
<total_count>5</total_count>
<album id="67512">
	<name><![CDATA[Brain Invaders]]></name>
	<artist id="10912"><![CDATA[Zebrahead]]></artist>
	<year>2019</year>
	<tracks>14</tracks>
	<disk>1</disk>
	<tag id="33" count="1" ><![CDATA[Alternative Rock]]></tag>
	<art><![CDATA[https://music.com.au/image.php?object_id=67512&object_type=album&auth=263297b0a7ee3000a0feebd05bc0a651]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<mbid>8046ba84-0285-46de-8ec5-1aa35cf5367a</mbid>
</album>
<album id="63824">
	<name><![CDATA[Groove Invaders]]></name>
	<artist id="11373"><![CDATA[Psyburbia]]></artist>
	<year>2001</year>
	<tracks>11</tracks>
	<disk>1</disk>
	<art><![CDATA[https://music.com.au/image.php?object_id=63824&object_type=album&auth=263297b0a7ee3000a0feebd05bc0a651]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<mbid>987ccaab-dccc-43f4-9f6b-915cc2963f51</mbid>
</album>
<album id="44142">
	<name><![CDATA[Invaders]]></name>
	<artist id="7247"><![CDATA[al | bo]]></artist>
	<year>2016</year>
	<tracks>42</tracks>
	<disk>1</disk>
	<art><![CDATA[https://music.com.au/image.php?object_id=44142&object_type=album&auth=263297b0a7ee3000a0feebd05bc0a651]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<mbid></mbid>
</album>
<album id="65269">
	<name><![CDATA[Invaders]]></name>
	<artist id="12735"><![CDATA[Hollywood Burns]]></artist>
	<year>2018</year>
	<tracks>11</tracks>
	<disk>1</disk>
	<art><![CDATA[https://music.com.au/image.php?object_id=65269&object_type=album&auth=263297b0a7ee3000a0feebd05bc0a651]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<mbid>a8f0b50f-d6f2-49de-9236-9c9204692aae</mbid>
</album>
<album id="54185">
	<name><![CDATA[Invaders Must Die]]></name>
	<artist id="605"><![CDATA[Prodigy]]></artist>
	<year>2009</year>
	<tracks>13</tracks>
	<disk>1</disk>
	<art><![CDATA[https://music.com.au/image.php?object_id=54185&object_type=album&auth=263297b0a7ee3000a0feebd05bc0a651]]></art>
	<flag>1</flag>
	<preciserating>5</preciserating>
	<rating>5</rating>
	<averagerating>0</averagerating>
	<mbid>dfc85b85-d12e-4950-9378-a3c1e67833d9</mbid>
</album>
</root>

```

## album

* MINIMUM_API_VERSION=380001

This returns a single album based on the UID provided
@param array $input

|Input    |Type|Description|Optional|
|---------|----|-----------|-------:|
|'filter' |    |UID of Album, returns album XML|NO      |
|'include'|array|Array specified using GET convention, can contain `songs` and will include the corresponding XML nested in the album XML|NO      |

```XML
<?xml version="1.0" encoding="UTF-8" ?>
<root>
<total_count>1</total_count>
<album id="54130">
	<name><![CDATA["...Famous Last Words..."]]></name>
	<artist id="6778"><![CDATA[Supertramp]]></artist>
	<year>2002</year>
	<tracks>9</tracks>
	<disk>1</disk>
	<art><![CDATA[https://music.com.au/image.php?object_id=54130&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<mbid>dc0bdca9-ae06-426b-9a43-f23334d0e939</mbid>
</album>
</root>
```

## album_songs

* MINIMUM_API_VERSION=380001

This returns the songs of a specified album
@param array $input

|Input   |Type|Description|Optional|
|--------|----|-----------|-------:|
|'filter'|    |UID of Album, returns song XML|NO      |
|'offset'|    |           |YES     |
|'limit' |    |           |YES     |

```XML
<?xml version="1.0" encoding="UTF-8" ?>
<root>
<total_count>9</total_count>
<song id="130769">
	<title><![CDATA[Crazy]]></title>
	<name><![CDATA[Crazy]]></name>
	<artist id="6778"><![CDATA[Supertramp]]></artist>
	<album id="54130"><![CDATA["...Famous Last Words..."]]></album>
	<tag id="6" count="1" ><![CDATA[Rock]]></tag>
	<tag id="47" count="1" ><![CDATA[Pop Rock]]></tag>
	<filename><![CDATA[/mnt/music/Supertramp/(1982) "...Famous Last Words..." [493 353-2]/101 - Crazy.mp3]]></filename>
	<track>1</track>
	<time>284</time>
	<year>2002</year>
	<bitrate>320000</bitrate>
	<rate>44100</rate>
	<mode>cbr</mode>
	<mime>audio/mpeg</mime>
	<url><![CDATA[https://music.com.au/play/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=130769&uid=2&player=api&name=Supertramp%20-%20Crazy.mp3]]></url>
	<size>11401970</size>
	<mbid>1f54f7f0-f63b-47d0-abcc-e06db26ba9f0</mbid>
	<album_mbid></album_mbid>
	<artist_mbid></artist_mbid>
	<albumartist_mbid></albumartist_mbid>
	<art><![CDATA[https://music.com.au/image.php?object_id=54130&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<composer><![CDATA[Roger Hodgson]]></composer>
	<channels></channels>
	<comment><![CDATA[]]></comment>
	<publisher><![CDATA[A&M Records]]></publisher>
	<language></language>
	<replaygain_album_gain>0.000000</replaygain_album_gain>
	<replaygain_album_peak>0.000000</replaygain_album_peak>
	<replaygain_track_gain>-7.660000</replaygain_track_gain>
	<replaygain_track_peak>1.000000</replaygain_track_peak>
	<genre><![CDATA[Rock]]></genre>
	<genre><![CDATA[Pop Rock]]></genre>
</song>
<song id="130773">
	<title><![CDATA[Put on Your Old Brown Shoes]]></title>
	<name><![CDATA[Put on Your Old Brown Shoes]]></name>
	<artist id="6778"><![CDATA[Supertramp]]></artist>
	<album id="54130"><![CDATA["...Famous Last Words..."]]></album>
	<tag id="6" count="1" ><![CDATA[Rock]]></tag>
	<tag id="47" count="1" ><![CDATA[Pop Rock]]></tag>
	<filename><![CDATA[/mnt/music/Supertramp/(1982) "...Famous Last Words..." [493 353-2]/102 - Put on Your Old Brown Shoes.mp3]]></filename>
	<track>2</track>
	<time>259</time>
	<year>2002</year>
	<bitrate>320000</bitrate>
	<rate>44100</rate>
	<mode>cbr</mode>
	<mime>audio/mpeg</mime>
	<url><![CDATA[https://music.com.au/play/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=130773&uid=2&player=api&name=Supertramp%20-%20Put%20on%20Your%20Old%20Brown%20Shoes.mp3]]></url>
	<size>10400957</size>
	<mbid>d837f15b-e74d-4463-8bdb-25c36eb9c7a5</mbid>
	<album_mbid></album_mbid>
	<artist_mbid></artist_mbid>
	<albumartist_mbid></albumartist_mbid>
	<art><![CDATA[https://music.com.au/image.php?object_id=54130&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<composer><![CDATA[Rick Davies]]></composer>
	<channels></channels>
	<comment><![CDATA[]]></comment>
	<publisher><![CDATA[A&M Records]]></publisher>
	<language></language>
	<replaygain_album_gain>0.000000</replaygain_album_gain>
	<replaygain_album_peak>0.000000</replaygain_album_peak>
	<replaygain_track_gain>-5.630000</replaygain_track_gain>
	<replaygain_track_peak>1.000000</replaygain_track_peak>
	<genre><![CDATA[Rock]]></genre>
	<genre><![CDATA[Pop Rock]]></genre>
</song>
<song id="130770">
	<title><![CDATA[It's Raining Again]]></title>
	<name><![CDATA[It's Raining Again]]></name>
	<artist id="6778"><![CDATA[Supertramp]]></artist>
	<album id="54130"><![CDATA["...Famous Last Words..."]]></album>
	<tag id="6" count="1" ><![CDATA[Rock]]></tag>
	<tag id="47" count="1" ><![CDATA[Pop Rock]]></tag>
	<filename><![CDATA[/mnt/music/Supertramp/(1982) "...Famous Last Words..." [493 353-2]/103 - It's Raining Again.mp3]]></filename>
	<track>3</track>
	<time>264</time>
	<year>2002</year>
	<bitrate>320000</bitrate>
	<rate>44100</rate>
	<mode>cbr</mode>
	<mime>audio/mpeg</mime>
	<url><![CDATA[https://music.com.au/play/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=130770&uid=2&player=api&name=Supertramp%20-%20It-s%20Raining%20Again.mp3]]></url>
	<size>10583815</size>
	<mbid>45b93719-bc48-4ee9-bb7a-b5f8b8a2e5f5</mbid>
	<album_mbid></album_mbid>
	<artist_mbid></artist_mbid>
	<albumartist_mbid></albumartist_mbid>
	<art><![CDATA[https://music.com.au/image.php?object_id=54130&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<composer><![CDATA[Roger Hodgson]]></composer>
	<channels></channels>
	<comment><![CDATA[]]></comment>
	<publisher><![CDATA[A&M Records]]></publisher>
	<language>eng</language>
	<replaygain_album_gain>0.000000</replaygain_album_gain>
	<replaygain_album_peak>0.000000</replaygain_album_peak>
	<replaygain_track_gain>-7.840000</replaygain_track_gain>
	<replaygain_track_peak>1.000000</replaygain_track_peak>
	<genre><![CDATA[Rock]]></genre>
	<genre><![CDATA[Pop Rock]]></genre>
</song>
<song id="130776">
	<title><![CDATA[Bonnie]]></title>
	<name><![CDATA[Bonnie]]></name>
	<artist id="6778"><![CDATA[Supertramp]]></artist>
	<album id="54130"><![CDATA["...Famous Last Words..."]]></album>
	<tag id="6" count="1" ><![CDATA[Rock]]></tag>
	<tag id="47" count="1" ><![CDATA[Pop Rock]]></tag>
	<filename><![CDATA[/mnt/music/Supertramp/(1982) "...Famous Last Words..." [493 353-2]/104 - Bonnie.mp3]]></filename>
	<track>4</track>
	<time>335</time>
	<year>2002</year>
	<bitrate>320000</bitrate>
	<rate>44100</rate>
	<mode>cbr</mode>
	<mime>audio/mpeg</mime>
	<url><![CDATA[https://music.com.au/play/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=130776&uid=2&player=api&name=Supertramp%20-%20Bonnie.mp3]]></url>
	<size>13441610</size>
	<mbid>849a2238-5854-4f02-8b6b-4800281775be</mbid>
	<album_mbid></album_mbid>
	<artist_mbid></artist_mbid>
	<albumartist_mbid></albumartist_mbid>
	<art><![CDATA[https://music.com.au/image.php?object_id=54130&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<composer><![CDATA[Rick Davies]]></composer>
	<channels></channels>
	<comment><![CDATA[]]></comment>
	<publisher><![CDATA[A&M Records]]></publisher>
	<language></language>
	<replaygain_album_gain>0.000000</replaygain_album_gain>
	<replaygain_album_peak>0.000000</replaygain_album_peak>
	<replaygain_track_gain>-6.760000</replaygain_track_gain>
	<replaygain_track_peak>1.000000</replaygain_track_peak>
	<genre><![CDATA[Rock]]></genre>
	<genre><![CDATA[Pop Rock]]></genre>
</song>
<song id="130777">
	<title><![CDATA[Know Who You Are]]></title>
	<name><![CDATA[Know Who You Are]]></name>
	<artist id="6778"><![CDATA[Supertramp]]></artist>
	<album id="54130"><![CDATA["...Famous Last Words..."]]></album>
	<tag id="6" count="1" ><![CDATA[Rock]]></tag>
	<tag id="47" count="1" ><![CDATA[Pop Rock]]></tag>
	<filename><![CDATA[/mnt/music/Supertramp/(1982) "...Famous Last Words..." [493 353-2]/105 - Know Who You Are.mp3]]></filename>
	<track>5</track>
	<time>299</time>
	<year>2002</year>
	<bitrate>320000</bitrate>
	<rate>44100</rate>
	<mode>cbr</mode>
	<mime>audio/mpeg</mime>
	<url><![CDATA[https://music.com.au/play/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=130777&uid=2&player=api&name=Supertramp%20-%20Know%20Who%20You%20Are.mp3]]></url>
	<size>12002786</size>
	<mbid>50ace726-dc88-4e69-a67b-db5cef55f3b6</mbid>
	<album_mbid></album_mbid>
	<artist_mbid></artist_mbid>
	<albumartist_mbid></albumartist_mbid>
	<art><![CDATA[https://music.com.au/image.php?object_id=54130&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<composer><![CDATA[Roger Hodgson]]></composer>
	<channels></channels>
	<comment><![CDATA[]]></comment>
	<publisher><![CDATA[A&M Records]]></publisher>
	<language></language>
	<replaygain_album_gain>0.000000</replaygain_album_gain>
	<replaygain_album_peak>0.000000</replaygain_album_peak>
	<replaygain_track_gain>-0.690000</replaygain_track_gain>
	<replaygain_track_peak>0.933000</replaygain_track_peak>
	<genre><![CDATA[Rock]]></genre>
	<genre><![CDATA[Pop Rock]]></genre>
</song>
<song id="130774">
	<title><![CDATA[My Kind of Lady]]></title>
	<name><![CDATA[My Kind of Lady]]></name>
	<artist id="6778"><![CDATA[Supertramp]]></artist>
	<album id="54130"><![CDATA["...Famous Last Words..."]]></album>
	<tag id="6" count="1" ><![CDATA[Rock]]></tag>
	<tag id="47" count="1" ><![CDATA[Pop Rock]]></tag>
	<filename><![CDATA[/mnt/music/Supertramp/(1982) "...Famous Last Words..." [493 353-2]/106 - My Kind of Lady.mp3]]></filename>
	<track>6</track>
	<time>313</time>
	<year>2002</year>
	<bitrate>320000</bitrate>
	<rate>44100</rate>
	<mode>cbr</mode>
	<mime>audio/mpeg</mime>
	<url><![CDATA[https://music.com.au/play/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=130774&uid=2&player=api&name=Supertramp%20-%20My%20Kind%20of%20Lady.mp3]]></url>
	<size>12562851</size>
	<mbid>254dfb84-8921-4f39-ba04-d4f504cf17f6</mbid>
	<album_mbid></album_mbid>
	<artist_mbid></artist_mbid>
	<albumartist_mbid></albumartist_mbid>
	<art><![CDATA[https://music.com.au/image.php?object_id=54130&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<composer><![CDATA[Rick Davies]]></composer>
	<channels></channels>
	<comment><![CDATA[]]></comment>
	<publisher><![CDATA[A&M Records]]></publisher>
	<language></language>
	<replaygain_album_gain>0.000000</replaygain_album_gain>
	<replaygain_album_peak>0.000000</replaygain_album_peak>
	<replaygain_track_gain>-7.030000</replaygain_track_gain>
	<replaygain_track_peak>1.000000</replaygain_track_peak>
	<genre><![CDATA[Rock]]></genre>
	<genre><![CDATA[Pop Rock]]></genre>
</song>
<song id="130775">
	<title><![CDATA[C'est le bon]]></title>
	<name><![CDATA[C'est le bon]]></name>
	<artist id="6778"><![CDATA[Supertramp]]></artist>
	<album id="54130"><![CDATA["...Famous Last Words..."]]></album>
	<tag id="6" count="1" ><![CDATA[Rock]]></tag>
	<tag id="47" count="1" ><![CDATA[Pop Rock]]></tag>
	<filename><![CDATA[/mnt/music/Supertramp/(1982) "...Famous Last Words..." [493 353-2]/107 - C'est le bon.mp3]]></filename>
	<track>7</track>
	<time>330</time>
	<year>2002</year>
	<bitrate>320000</bitrate>
	<rate>44100</rate>
	<mode>cbr</mode>
	<mime>audio/mpeg</mime>
	<url><![CDATA[https://music.com.au/play/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=130775&uid=2&player=api&name=Supertramp%20-%20C-est%20le%20bon.mp3]]></url>
	<size>13225317</size>
	<mbid>b424c25b-5a25-4632-b40c-0630ea2ac18c</mbid>
	<album_mbid></album_mbid>
	<artist_mbid></artist_mbid>
	<albumartist_mbid></albumartist_mbid>
	<art><![CDATA[https://music.com.au/image.php?object_id=54130&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<composer><![CDATA[Roger Hodgson]]></composer>
	<channels></channels>
	<comment><![CDATA[]]></comment>
	<publisher><![CDATA[A&M Records]]></publisher>
	<language></language>
	<replaygain_album_gain>0.000000</replaygain_album_gain>
	<replaygain_album_peak>0.000000</replaygain_album_peak>
	<replaygain_track_gain>-4.000000</replaygain_track_gain>
	<replaygain_track_peak>1.000000</replaygain_track_peak>
	<genre><![CDATA[Rock]]></genre>
	<genre><![CDATA[Pop Rock]]></genre>
</song>
<song id="130771">
	<title><![CDATA[Waiting So Long]]></title>
	<name><![CDATA[Waiting So Long]]></name>
	<artist id="6778"><![CDATA[Supertramp]]></artist>
	<album id="54130"><![CDATA["...Famous Last Words..."]]></album>
	<tag id="6" count="1" ><![CDATA[Rock]]></tag>
	<tag id="47" count="1" ><![CDATA[Pop Rock]]></tag>
	<filename><![CDATA[/mnt/music/Supertramp/(1982) "...Famous Last Words..." [493 353-2]/108 - Waiting So Long.mp3]]></filename>
	<track>8</track>
	<time>392</time>
	<year>2002</year>
	<bitrate>320000</bitrate>
	<rate>44100</rate>
	<mode>cbr</mode>
	<mime>audio/mpeg</mime>
	<url><![CDATA[https://music.com.au/play/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=130771&uid=2&player=api&name=Supertramp%20-%20Waiting%20So%20Long.mp3]]></url>
	<size>15704859</size>
	<mbid>770bc398-6187-47ff-b6eb-28534525c9ee</mbid>
	<album_mbid></album_mbid>
	<artist_mbid></artist_mbid>
	<albumartist_mbid></albumartist_mbid>
	<art><![CDATA[https://music.com.au/image.php?object_id=54130&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<composer><![CDATA[Roger Hodgson]]></composer>
	<channels></channels>
	<comment><![CDATA[]]></comment>
	<publisher><![CDATA[A&M Records]]></publisher>
	<language></language>
	<replaygain_album_gain>0.000000</replaygain_album_gain>
	<replaygain_album_peak>0.000000</replaygain_album_peak>
	<replaygain_track_gain>-6.050000</replaygain_track_gain>
	<replaygain_track_peak>1.000000</replaygain_track_peak>
	<genre><![CDATA[Rock]]></genre>
	<genre><![CDATA[Pop Rock]]></genre>
</song>
<song id="130772">
	<title><![CDATA[Don't Leave Me Now]]></title>
	<name><![CDATA[Don't Leave Me Now]]></name>
	<artist id="6778"><![CDATA[Supertramp]]></artist>
	<album id="54130"><![CDATA["...Famous Last Words..."]]></album>
	<tag id="6" count="1" ><![CDATA[Rock]]></tag>
	<tag id="47" count="1" ><![CDATA[Pop Rock]]></tag>
	<filename><![CDATA[/mnt/music/Supertramp/(1982) "...Famous Last Words..." [493 353-2]/109 - Don't Leave Me Now.mp3]]></filename>
	<track>9</track>
	<time>385</time>
	<year>2002</year>
	<bitrate>320000</bitrate>
	<rate>44100</rate>
	<mode>cbr</mode>
	<mime>audio/mpeg</mime>
	<url><![CDATA[https://music.com.au/play/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=130772&uid=2&player=api&name=Supertramp%20-%20Don-t%20Leave%20Me%20Now.mp3]]></url>
	<size>15443635</size>
	<mbid>c5064ab3-cc38-4dda-ab3c-97e9a30d6690</mbid>
	<album_mbid></album_mbid>
	<artist_mbid></artist_mbid>
	<albumartist_mbid></albumartist_mbid>
	<art><![CDATA[https://music.com.au/image.php?object_id=54130&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<composer><![CDATA[Roger Hodgson]]></composer>
	<channels></channels>
	<comment><![CDATA[]]></comment>
	<publisher><![CDATA[A&M Records]]></publisher>
	<language>eng</language>
	<replaygain_album_gain>0.000000</replaygain_album_gain>
	<replaygain_album_peak>0.000000</replaygain_album_peak>
	<replaygain_track_gain>-7.220000</replaygain_track_gain>
	<replaygain_track_peak>1.000000</replaygain_track_peak>
	<genre><![CDATA[Rock]]></genre>
	<genre><![CDATA[Pop Rock]]></genre>
</song>
</root>
```

## tags

* MINIMUM_API_VERSION=380001

This returns the tags (Genres) based on the specified filter
@param array $input

|Input   |Type|Description|Optional|
|--------|----|-----------|-------:|
|'filter'|    |Value is Alpha Match for returned results, may be more than one letter/number|YES     |
|'exact' |boolean|if true filter is exact rather then fuzzy|YES     |
|'offset'|    |           |YES     |
|'limit' |    |           |YES     |

```XML
<?xml version="1.0" encoding="UTF-8" ?>
<root>
<total_count>1</total_count>
<tag id="1143">
	<name><![CDATA[Brutal Death Metal]]></name>
	<albums>6</albums>
	<artists>18</artists>
	<songs>303</songs>
	<videos>0</videos>
	<playlists>0</playlists>
	<stream>0</stream>
</tag>
</root>
```

## tag

* MINIMUM_API_VERSION=380001

This returns a single tag based on UID
@param array $input

|Input   |Type|Description|Optional|
|--------|----|-----------|-------:|
|'filter'|    |UID of tag, returns tag XML|NO      |

```XML
<?xml version="1.0" encoding="UTF-8" ?>
<root>
<total_count>1</total_count>
<tag id="674">
	<name><![CDATA[Math Rock]]></name>
	<albums>52</albums>
	<artists>32</artists>
	<songs>712</songs>
	<videos>0</videos>
	<playlists>0</playlists>
	<stream>0</stream>
</tag>
</root>
```

## tag_artists

* MINIMUM_API_VERSION=380001

This returns the artists associated with the tag in question as defined by the UID
@param array $input

|Input   |Type|Description|Optional|
|--------|----|-----------|-------:|
|'filter'|    |UID of tag, returns artist XML|NO      |
|'offset'|    |           |YES     |
|'limit' |    |           |YES     |

```XML
<?xml version="1.0" encoding="UTF-8" ?>
<root>
<total_count>18</total_count>
<artist id="9070">
	<name><![CDATA[Carnal Decay]]></name>
	<tag id="96" count="1" ><![CDATA[Death Metal]]></tag>
	<tag id="1143" count="1" ><![CDATA[Brutal Death Metal]]></tag>
	<albums>3</albums>
	<songs>28</songs>
	<art><![CDATA[https://music.com.au/image.php?object_id=9070&object_type=artist&auth=eeb9f1b6056246a7d563f479f518bb34]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<mbid>9ddf93f7-f0c4-4270-a099-e09509822c54</mbid>
	<summary><![CDATA[Carnal Decay started in 2002 as a sideproject to do some Death Metal. After a couple shows the band flew over to New Jersey to record their first MCD "Carnal Decay" at Rob Grenoble's Watermusic Recorders Studio. Billy Milano (SOD, MOD), right living in the same house, was soon convinced to make the production and mix of two songs for the MCD. 

After a couple line-up changes the band improved a lot and recorded 3 songs for a 3-way split called "Grotesque ]]></summary>
	<yearformed>0</yearformed>
	<placeformed><![CDATA[]]></placeformed>
</artist>
</root>

```

## tag_albums

* MINIMUM_API_VERSION=380001

This returns the albums associated with the tag in question
@param array $input

|Input   |Type|Description|Optional|
|--------|----|-----------|-------:|
|'filter'|    |UID of tag, returns album XML|NO      |
|'offset'|    |           |YES     |
|'limit' |    |           |YES     |

```XML
<?xml version="1.0" encoding="UTF-8" ?>
<root>
<total_count>6</total_count>
<album id="68920">
	<name><![CDATA[Reborn to Kill]]></name>
	<artist id="11725"><![CDATA[Pathology]]></artist>
	<year>2019</year>
	<tracks>12</tracks>
	<disk>1</disk>
	<tag id="1143" count="1" ><![CDATA[Brutal Death Metal]]></tag>
	<art><![CDATA[https://music.com.au/image.php?object_id=68920&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<mbid>2c77737d-ef64-46a9-82df-298671636308</mbid>
</album>
</root>
```

## tag_songs

* MINIMUM_API_VERSION=380001

returns the songs for this tag
@param array $input

|Input   |Type|Description|Optional|
|--------|----|-----------|-------:|
|'filter'|    |UID of tag, returns song XML|NO      |
|'offset'|    |           |YES     |
|'limit' |    |           |YES     |

```XML
<?xml version="1.0" encoding="UTF-8" ?>
<root>
<total_count>303</total_count>
<song id="874865">
	<title><![CDATA[Empathy Ends]]></title>
	<name><![CDATA[Empathy Ends]]></name>
	<artist id="11725"><![CDATA[Pathology]]></artist>
	<album id="68920"><![CDATA[Reborn to Kill]]></album>
	<tag id="1143" count="1" ><![CDATA[Brutal Death Metal]]></tag>
	<filename><![CDATA[/mnt/music/Pathology/(2019) Reborn to Kill/105 - Empathy Ends.flac]]></filename>
	<track>5</track>
	<time>108</time>
	<year>2019</year>
	<bitrate>972331</bitrate>
	<rate>44100</rate>
	<mode>vbr</mode>
	<mime>audio/x-flac</mime>
	<url><![CDATA[https://music.com.au/play/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=874865&uid=2&player=api&name=Pathology%20-%20Empathy%20Ends.flac]]></url>
	<size>13150169</size>
	<mbid>c7fb6342-3cd2-4d03-8c71-a98a2f8253e4</mbid>
	<album_mbid></album_mbid>
	<artist_mbid></artist_mbid>
	<albumartist_mbid></albumartist_mbid>
	<art><![CDATA[https://music.com.au/image.php?object_id=68920&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.png]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<composer><![CDATA[]]></composer>
	<channels></channels>
	<comment><![CDATA[]]></comment>
	<publisher><![CDATA[Pavement Music]]></publisher>
	<language></language>
	<replaygain_album_gain>0.000000</replaygain_album_gain>
	<replaygain_album_peak>0.000000</replaygain_album_peak>
	<replaygain_track_gain>0.000000</replaygain_track_gain>
	<replaygain_track_peak>0.000000</replaygain_track_peak>
	<genre><![CDATA[Brutal Death Metal]]></genre>
</song>
</root>
```

## songs

* MINIMUM_API_VERSION=380001

Returns songs based on the specified filter
@param array $input

|Input   |Type|Description|Optional|
|--------|----|-----------|-------:|
|'filter'|    |Value is Alpha Match for returned results, may be more than one letter/number|NO      |
|'add'    |set_filter|ISO 8601 Date Format assumed filter method is newer then specified date, however [START]/[END] can be specified to receive only results added between two dates|YES     |
|'update' |set_filter|ISO 8601 Date Format assumed filter method is newer then specified date, however [START]/[END] can be specified to receive only results updated between two dates|YES     |
|'exact' |boolean|if true filter is exact rather then fuzzy|NO      |
|'offset'|    |           |YES     |
|'limit' |    |           |YES     |

```XML
<xml version="1.0" encoding="UTF-8" ?>
<root>
<total_count>20</total_count>
<song id="164215">
	<title><![CDATA[!]]></title>
	<name><![CDATA[!]]></name>
	<artist id="8526"><![CDATA[Hellyeah]]></artist>
	<album id="56038"><![CDATA[Unden!able]]></album>
	<tag id="20" count="1" ><![CDATA[Metal]]></tag>
	<tag id="37" count="1" ><![CDATA[Hard Rock]]></tag>
	<filename><![CDATA[/mnt/music/Hellyeah/(2016) Unden!able [ESM 171-2]/101 - !.mp3]]></filename>
	<track>1</track>
	<time>79</time>
	<year>2016</year>
	<bitrate>320000</bitrate>
	<rate>44100</rate>
	<mode>cbr</mode>
	<mime>audio/mpeg</mime>
	<url><![CDATA[https://music.com.au/play/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=164215&uid=2&player=api&name=Hellyeah%20-%20-.mp3]]></url>
	<size>3184944</size>
	<mbid>42bb2b7a-bf67-4cc4-8610-25399d56474b</mbid>
	<album_mbid></album_mbid>
	<artist_mbid></artist_mbid>
	<albumartist_mbid></albumartist_mbid>
	<art><![CDATA[https://music.com.au/image.php?object_id=56038&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<composer><![CDATA[]]></composer>
	<channels></channels>
	<comment><![CDATA[]]></comment>
	<publisher><![CDATA[Eleven Seven Music]]></publisher>
	<language></language>
	<replaygain_album_gain>0.000000</replaygain_album_gain>
	<replaygain_album_peak>0.000000</replaygain_album_peak>
	<replaygain_track_gain>-6.920000</replaygain_track_gain>
	<replaygain_track_peak>1.000000</replaygain_track_peak>
	<genre><![CDATA[Metal]]></genre>
	<genre><![CDATA[Hard Rock]]></genre>
</song>
<song id="41252">
	<title><![CDATA[! (The Song Formerly Known As)]]></title>
	<name><![CDATA[! (The Song Formerly Known As)]]></name>
	<artist id="1464"><![CDATA[Regurgitator]]></artist>
	<album id="50272"><![CDATA[Unit]]></album>
	<tag id="16" count="1" ><![CDATA[Alternative]]></tag>
	<filename><![CDATA[/mnt/music/Regurgitator/(1997) Unit/103 - ! (The Song Formerly Known As).mp3]]></filename>
	<track>3</track>
	<time>208</time>
	<year>1997</year>
	<bitrate>160000</bitrate>
	<rate>44100</rate>
	<mode>cbr</mode>
	<mime>audio/mpeg</mime>
	<url><![CDATA[https://music.com.au/play/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=41252&uid=2&player=api&name=Regurgitator%20-%20-%20-The%20Song%20Formerly%20Known%20As-.mp3]]></url>
	<size>4198110</size>
	<mbid>5e14ee48-6337-4a70-8992-1ed74dddb945</mbid>
	<album_mbid></album_mbid>
	<artist_mbid></artist_mbid>
	<albumartist_mbid></albumartist_mbid>
	<art><![CDATA[https://music.com.au/image.php?object_id=50272&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg]]></art>
	<flag>0</flag>
	<preciserating>3</preciserating>
	<rating>3</rating>
	<averagerating>0</averagerating>
	<composer><![CDATA[]]></composer>
	<channels></channels>
	<comment><![CDATA[]]></comment>
	<publisher><![CDATA[]]></publisher>
	<language></language>
	<replaygain_album_gain>0.000000</replaygain_album_gain>
	<replaygain_album_peak>0.000000</replaygain_album_peak>
	<replaygain_track_gain>-10.460000</replaygain_track_gain>
	<replaygain_track_peak>1.000000</replaygain_track_peak>
	<genre><![CDATA[Alternative]]></genre>
</song>
<song id="84148">
	<title><![CDATA[! (The Song Formerly Known As)]]></title>
	<name><![CDATA[! (The Song Formerly Known As)]]></name>
	<artist id="1464"><![CDATA[Regurgitator]]></artist>
	<album id="32856"><![CDATA[Triple J: Hottest 100, Volume 6]]></album>
	<tag id="3" count="1" ><![CDATA[Punk]]></tag>
	<tag id="4" count="1" ><![CDATA[Electronic]]></tag>
	<tag id="6" count="1" ><![CDATA[Rock]]></tag>
	<tag id="7" count="1" ><![CDATA[Synthpop]]></tag>
	<tag id="22" count="1" ><![CDATA[Pop]]></tag>
	<tag id="37" count="1" ><![CDATA[Hard Rock]]></tag>
	<tag id="184" count="1" ><![CDATA[Parody]]></tag>
	<tag id="615" count="1" ><![CDATA[Big Beat]]></tag>
	<tag id="1409" count="1" ><![CDATA[Hip Hop]]></tag>
	<filename><![CDATA[/mnt/music/Various Artists/(1999) Triple J: Hottest 100, Volume 6/212 - ! (The Song Formerly Known As).mp3]]></filename>
	<track>12</track>
	<time>207</time>
	<year>1999</year>
	<bitrate>160000</bitrate>
	<rate>44100</rate>
	<mode>cbr</mode>
	<mime>audio/mpeg</mime>
	<url><![CDATA[https://music.com.au/play/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=84148&uid=2&player=api&name=Regurgitator%20-%20-%20-The%20Song%20Formerly%20Known%20As-.mp3]]></url>
	<size>4149473</size>
	<mbid>5e14ee48-6337-4a70-8992-1ed74dddb945</mbid>
	<album_mbid></album_mbid>
	<artist_mbid></artist_mbid>
	<albumartist_mbid></albumartist_mbid>
	<art><![CDATA[https://music.com.au/image.php?object_id=32856&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<composer><![CDATA[]]></composer>
	<channels></channels>
	<comment><![CDATA[]]></comment>
	<publisher><![CDATA[EMI Music Australia]]></publisher>
	<language></language>
	<replaygain_album_gain>0.000000</replaygain_album_gain>
	<replaygain_album_peak>0.000000</replaygain_album_peak>
	<replaygain_track_gain>-8.090000</replaygain_track_gain>
	<replaygain_track_peak>1.000000</replaygain_track_peak>
	<genre><![CDATA[Punk]]></genre>
	<genre><![CDATA[Electronic]]></genre>
	<genre><![CDATA[Rock]]></genre>
	<genre><![CDATA[Synthpop]]></genre>
	<genre><![CDATA[Pop]]></genre>
	<genre><![CDATA[Hard Rock]]></genre>
	<genre><![CDATA[Parody]]></genre>
	<genre><![CDATA[Big Beat]]></genre>
	<genre><![CDATA[Hip Hop]]></genre>
</song>
<song id="776781">
	<title><![CDATA[! (The Song Formerly Known As)]]></title>
	<name><![CDATA[! (The Song Formerly Known As)]]></name>
	<artist id="1464"><![CDATA[Regurgitator]]></artist>
	<album id="41794"><![CDATA[Recovery]]></album>
	<tag id="4" count="1" ><![CDATA[Electronic]]></tag>
	<tag id="6" count="1" ><![CDATA[Rock]]></tag>
	<tag id="33" count="1" ><![CDATA[Alternative Rock]]></tag>
	<tag id="36" count="1" ><![CDATA[Indie Rock]]></tag>
	<filename><![CDATA[/mnt/music/Various Artists/(2016) Recovery [5715567]/101 - Regurgitator - ! (The Song Formerly Known As).mp3]]></filename>
	<track>1</track>
	<time>204</time>
	<year>2016</year>
	<bitrate>320040</bitrate>
	<rate>44100</rate>
	<mode>vbr</mode>
	<mime>audio/mpeg</mime>
	<url><![CDATA[https://music.com.au/play/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=776781&uid=2&player=api&name=Regurgitator%20-%20-%20-The%20Song%20Formerly%20Known%20As-.mp3]]></url>
	<size>8186819</size>
	<mbid>5e14ee48-6337-4a70-8992-1ed74dddb945</mbid>
	<album_mbid></album_mbid>
	<artist_mbid></artist_mbid>
	<albumartist_mbid></albumartist_mbid>
	<art><![CDATA[https://music.com.au/image.php?object_id=41794&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<composer><![CDATA[]]></composer>
	<channels></channels>
	<comment><![CDATA[]]></comment>
	<publisher><![CDATA[]]></publisher>
	<language></language>
	<replaygain_album_gain>0.000000</replaygain_album_gain>
	<replaygain_album_peak>0.000000</replaygain_album_peak>
	<replaygain_track_gain>-7.290000</replaygain_track_gain>
	<replaygain_track_peak>1.000000</replaygain_track_peak>
	<genre><![CDATA[Electronic]]></genre>
	<genre><![CDATA[Rock]]></genre>
	<genre><![CDATA[Alternative Rock]]></genre>
	<genre><![CDATA[Indie Rock]]></genre>
</song>
<song id="862619">
	<title><![CDATA[!!!!!!!]]></title>
	<name><![CDATA[!!!!!!!]]></name>
	<artist id="11885"><![CDATA[Billie Eilish]]></artist>
	<album id="67655"><![CDATA[WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?]]></album>
	<tag id="22" count="1" ><![CDATA[Pop]]></tag>
	<filename><![CDATA[/mnt/music/Billie Eilish/(2019) WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?/101 - !!!!!!!.flac]]></filename>
	<track>1</track>
	<time>13</time>
	<year>2019</year>
	<bitrate>498008</bitrate>
	<rate>44100</rate>
	<mode>vbr</mode>
	<mime>audio/x-flac</mime>
	<url><![CDATA[https://music.com.au/play/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=862619&uid=2&player=api&name=Billie%20Eilish%20-%20-.flac]]></url>
	<size>844955</size>
	<mbid>75090060-75fa-4a87-aa63-c0f730d1825d</mbid>
	<album_mbid></album_mbid>
	<artist_mbid></artist_mbid>
	<albumartist_mbid></albumartist_mbid>
	<art><![CDATA[https://music.com.au/image.php?object_id=67655&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<composer><![CDATA[]]></composer>
	<channels></channels>
	<comment><![CDATA[]]></comment>
	<publisher><![CDATA[]]></publisher>
	<language></language>
	<replaygain_album_gain>0.000000</replaygain_album_gain>
	<replaygain_album_peak>0.000000</replaygain_album_peak>
	<replaygain_track_gain>0.000000</replaygain_track_gain>
	<replaygain_track_peak>0.000000</replaygain_track_peak>
	<genre><![CDATA[Pop]]></genre>
</song>
<song id="780939">
	<title><![CDATA[!AllAboutYou]]></title>
	<name><![CDATA[!AllAboutYou]]></name>
	<artist id="1598"><![CDATA[Psy\'Aviah]]></artist>
	<album id="12953"><![CDATA[Eclectric]]></album>
	<tag id="4" count="1" ><![CDATA[Electronic]]></tag>
	<filename><![CDATA[/mnt/music/Psy\'Aviah/(2010) Eclectric [AM2142DCD]/103 - !AllAboutYou.mp3]]></filename>
	<track>3</track>
	<time>212</time>
	<year>2010</year>
	<bitrate>192002</bitrate>
	<rate>44100</rate>
	<mode>vbr</mode>
	<mime>audio/mpeg</mime>
	<url><![CDATA[https://music.com.au/play/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=780939&uid=2&player=api&name=Psy-Aviah%20-%20-AllAboutYou.mp3]]></url>
	<size>5105699</size>
	<mbid>e147461a-092c-486e-97f2-cfc31d70c22a</mbid>
	<album_mbid></album_mbid>
	<artist_mbid></artist_mbid>
	<albumartist_mbid></albumartist_mbid>
	<art><![CDATA[https://music.com.au/image.php?object_id=12953&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<composer><![CDATA[]]></composer>
	<channels></channels>
	<comment><![CDATA[Lbl:Alfa Matrix C:AM2142DCD]]></comment>
	<publisher><![CDATA[Alfa Matrix]]></publisher>
	<language>English</language>
	<replaygain_album_gain>0.000000</replaygain_album_gain>
	<replaygain_album_peak>0.000000</replaygain_album_peak>
	<replaygain_track_gain>-9.800000</replaygain_track_gain>
	<replaygain_track_peak>1.000000</replaygain_track_peak>
	<genre><![CDATA[Electronic]]></genre>
</song>
<song id="73677">
	<title><![CDATA[!UOY Sevol Natas]]></title>
	<name><![CDATA[!UOY Sevol Natas]]></name>
	<artist id="64"><![CDATA[TISM]]></artist>
	<album id="51219"><![CDATA[Machiavelli and the Four Seasons]]></album>
	<tag id="33" count="1" ><![CDATA[Alternative Rock]]></tag>
	<filename><![CDATA[/mnt/music/TISM/(1995) Machiavelli and the Four Seasons/105 - !UOY Sevol Natas.mp3]]></filename>
	<track>5</track>
	<time>216</time>
	<year>2001</year>
	<bitrate>246303</bitrate>
	<rate>44100</rate>
	<mode>vbr</mode>
	<mime>audio/mpeg</mime>
	<url><![CDATA[https://music.com.au/play/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=73677&uid=2&player=api&name=TISM%20-%20-UOY%20Sevol%20Natas.mp3]]></url>
	<size>6673480</size>
	<mbid>f6b844ab-26fd-4b97-8d11-eb8cecdfcd19</mbid>
	<album_mbid></album_mbid>
	<artist_mbid></artist_mbid>
	<albumartist_mbid></albumartist_mbid>
	<art><![CDATA[https://music.com.au/image.php?object_id=51219&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<composer><![CDATA[]]></composer>
	<channels></channels>
	<comment><![CDATA[]]></comment>
	<publisher><![CDATA[]]></publisher>
	<language></language>
	<replaygain_album_gain>0.000000</replaygain_album_gain>
	<replaygain_album_peak>0.000000</replaygain_album_peak>
	<replaygain_track_gain>-5.830000</replaygain_track_gain>
	<replaygain_track_peak>0.955000</replaygain_track_peak>
	<genre><![CDATA[Alternative Rock]]></genre>
</song>
<song id="799653">
	<title><![CDATA["5000"]]></title>
	<name><![CDATA["5000"]]></name>
	<artist id="11238"><![CDATA[Nelly]]></artist>
	<album id="62549"><![CDATA[Nellyville]]></album>
	<tag id="115" count="1" ><![CDATA[Rap]]></tag>
	<tag id="1409" count="1" ><![CDATA[Hip Hop]]></tag>
	<filename><![CDATA[/mnt/music/Nelly/(2002) Nellyville [UICU-1030]/115 - "5000".mp3]]></filename>
	<track>15</track>
	<time>131</time>
	<year>2002</year>
	<bitrate>320000</bitrate>
	<rate>44100</rate>
	<mode>cbr</mode>
	<mime>audio/mpeg</mime>
	<url><![CDATA[https://music.com.au/play/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=799653&uid=2&player=api&name=Nelly%20-%20-5000-.mp3]]></url>
	<size>5983980</size>
	<mbid>c354e9de-a65f-4db8-a65b-b0652ebedd9b</mbid>
	<album_mbid></album_mbid>
	<artist_mbid></artist_mbid>
	<albumartist_mbid></albumartist_mbid>
	<art><![CDATA[https://music.com.au/image.php?object_id=62549&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.png]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<composer><![CDATA[]]></composer>
	<channels></channels>
	<comment><![CDATA[]]></comment>
	<publisher><![CDATA[Universal International]]></publisher>
	<language></language>
	<replaygain_album_gain>0.000000</replaygain_album_gain>
	<replaygain_album_peak>0.000000</replaygain_album_peak>
	<replaygain_track_gain>3.750000</replaygain_track_gain>
	<replaygain_track_peak>0.955000</replaygain_track_peak>
	<genre><![CDATA[Rap]]></genre>
	<genre><![CDATA[Hip Hop]]></genre>
</song>
<song id="126649">
	<title><![CDATA["A" 200]]></title>
	<name><![CDATA["A" 200]]></name>
	<artist id="1217"><![CDATA[Deep Purple]]></artist>
	<album id="53868"><![CDATA[Burn]]></album>
	<tag id="6" count="1" ><![CDATA[Rock]]></tag>
	<tag id="37" count="1" ><![CDATA[Hard Rock]]></tag>
	<filename><![CDATA[/mnt/music/Deep Purple/(1974) Burn [724347362125]/108 - "A" 200.mp3]]></filename>
	<track>8</track>
	<time>256</time>
	<year>2004</year>
	<bitrate>320000</bitrate>
	<rate>44100</rate>
	<mode>cbr</mode>
	<mime>audio/mpeg</mime>
	<url><![CDATA[https://music.com.au/play/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=126649&uid=2&player=api&name=Deep%20Purple%20-%20-A-%20200.mp3]]></url>
	<size>10266393</size>
	<mbid>7cd603cb-4b8c-47c4-ba8b-49d47be7d524</mbid>
	<album_mbid></album_mbid>
	<artist_mbid></artist_mbid>
	<albumartist_mbid></albumartist_mbid>
	<art><![CDATA[https://music.com.au/image.php?object_id=53868&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<composer><![CDATA[Ian Paice]]></composer>
	<channels></channels>
	<comment><![CDATA[]]></comment>
	<publisher><![CDATA[EMI]]></publisher>
	<language></language>
	<replaygain_album_gain>0.000000</replaygain_album_gain>
	<replaygain_album_peak>0.000000</replaygain_album_peak>
	<replaygain_track_gain>-8.520000</replaygain_track_gain>
	<replaygain_track_peak>1.000000</replaygain_track_peak>
	<genre><![CDATA[Rock]]></genre>
	<genre><![CDATA[Hard Rock]]></genre>
</song>
<song id="796430">
	<title><![CDATA["Aeriel" (Satre Dance)]]></title>
	<name><![CDATA["Aeriel" (Satre Dance)]]></name>
	<artist id="11109"><![CDATA[Echo Us]]></artist>
	<album id="62340"><![CDATA[To Wake a Dream in Moving Water]]></album>
	<tag id="61" count="1" ><![CDATA[Progressive Rock]]></tag>
	<filename><![CDATA[/mnt/music/Echo Us/(2017) To Wake a Dream in Moving Water [EU07.03AP]/102 - "Aeriel" (Satre Dance).mp3]]></filename>
	<track>2</track>
	<time>280</time>
	<year>2017</year>
	<bitrate>320029</bitrate>
	<rate>44100</rate>
	<mode>vbr</mode>
	<mime>audio/mpeg</mime>
	<url><![CDATA[https://music.com.au/play/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=796430&uid=2&player=api&name=Echo%20Us%20-%20-Aeriel-%20-Satre%20Dance-.mp3]]></url>
	<size>11250973</size>
	<mbid>281d2eb7-9bc3-43c2-999d-c78c52aebd1b</mbid>
	<album_mbid></album_mbid>
	<artist_mbid></artist_mbid>
	<albumartist_mbid></albumartist_mbid>
	<art><![CDATA[https://music.com.au/image.php?object_id=62340&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<composer><![CDATA[]]></composer>
	<channels></channels>
	<comment><![CDATA[]]></comment>
	<publisher><![CDATA[Absolute Probability Recordings]]></publisher>
	<language></language>
	<replaygain_album_gain>0.000000</replaygain_album_gain>
	<replaygain_album_peak>0.000000</replaygain_album_peak>
	<replaygain_track_gain>-6.920000</replaygain_track_gain>
	<replaygain_track_peak>1.000000</replaygain_track_peak>
	<genre><![CDATA[Progressive Rock]]></genre>
</song>
<song id="140687">
	<title><![CDATA["After Cease to Exist" (The Original Soundtrack of the Coum Transmissions film)]]></title>
	<name><![CDATA["After Cease to Exist" (The Original Soundtrack of the Coum Transmissions film)]]></name>
	<artist id="188"><![CDATA[Throbbing Gristle]]></artist>
	<album id="51634"><![CDATA[The Second Annual Report]]></album>
	<tag id="9" count="1" ><![CDATA[Industrial]]></tag>
	<filename><![CDATA[/mnt/music/Throbbing Gristle/(1977) The Second Annual Report [TGCD2]/109 - "After Cease to Exist" (The Original Soundtrack of the Coum Transmissions film).mp3]]></filename>
	<track>9</track>
	<time>1219</time>
	<year>1991</year>
	<bitrate>320000</bitrate>
	<rate>44100</rate>
	<mode>cbr</mode>
	<mime>audio/mpeg</mime>
	<url><![CDATA[https://music.com.au/play/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=140687&uid=2&player=api&name=Throbbing%20Gristle%20-%20-After%20Cease%20to%20Exist-%20-The%20Original%20Soundtrack%20of%20the%20Coum%20Transmissions%20film-.mp3]]></url>
	<size>48793142</size>
	<mbid>a2da18d2-3ce4-42d7-9977-35172c33abeb</mbid>
	<album_mbid></album_mbid>
	<artist_mbid></artist_mbid>
	<albumartist_mbid></albumartist_mbid>
	<art><![CDATA[https://music.com.au/image.php?object_id=51634&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<composer><![CDATA[Throbbing Gristle]]></composer>
	<channels></channels>
	<comment><![CDATA[]]></comment>
	<publisher><![CDATA[Mute]]></publisher>
	<language></language>
	<replaygain_album_gain>0.000000</replaygain_album_gain>
	<replaygain_album_peak>0.000000</replaygain_album_peak>
	<replaygain_track_gain>5.070000</replaygain_track_gain>
	<replaygain_track_peak>0.750000</replaygain_track_peak>
	<genre><![CDATA[Industrial]]></genre>
</song>
<song id="841684">
	<title><![CDATA["And There Was Nothing I Could Do to Prevent It" (out-takes and master)]]></title>
	<name><![CDATA["And There Was Nothing I Could Do to Prevent It" (out-takes and master)]]></name>
	<artist id="12888"><![CDATA[Jeff Wayne]]></artist>
	<album id="48413"><![CDATA[Jeff Wayne\'s Musical Version of The War of the Worlds]]></album>
	<tag id="61" count="1" ><![CDATA[Progressive Rock]]></tag>
	<filename><![CDATA[/mnt/music/Jeff Wayne/(1978) Jeff Wayne\'s Musical Version of The War of the Worlds [0960003000]/534 - "And There Was Nothing I Could Do to Prevent It" (out-takes and master).mp3]]></filename>
	<track>34</track>
	<time>37</time>
	<year>2005</year>
	<bitrate>320000</bitrate>
	<rate>44100</rate>
	<mode>cbr</mode>
	<mime>audio/mpeg</mime>
	<url><![CDATA[https://music.com.au/play/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=841684&uid=2&player=api&name=Jeff%20Wayne%20-%20-And%20There%20Was%20Nothing%20I%20Could%20Do%20to%20Prevent%20It-%20-out-takes%20and%20master-.mp3]]></url>
	<size>1557038</size>
	<mbid>94bbaf26-1ca3-4818-9e35-072e44727ee8</mbid>
	<album_mbid></album_mbid>
	<artist_mbid></artist_mbid>
	<albumartist_mbid></albumartist_mbid>
	<art><![CDATA[https://music.com.au/image.php?object_id=48413&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<composer><![CDATA[]]></composer>
	<channels></channels>
	<comment><![CDATA[]]></comment>
	<publisher><![CDATA[Columbia]]></publisher>
	<language></language>
	<replaygain_album_gain>0.000000</replaygain_album_gain>
	<replaygain_album_peak>0.000000</replaygain_album_peak>
	<replaygain_track_gain>0.000000</replaygain_track_gain>
	<replaygain_track_peak>0.000000</replaygain_track_peak>
	<genre><![CDATA[Progressive Rock]]></genre>
</song>
<song id="69404">
	<title><![CDATA["Antmusic"]]></title>
	<name><![CDATA["Antmusic"]]></name>
	<artist id="3792"><![CDATA[Adam and The Ants]]></artist>
	<album id="50922"><![CDATA[Kings of the Wild Frontier]]></album>
	<tag id="48" count="1" ><![CDATA[New Wave]]></tag>
	<filename><![CDATA[/mnt/music/Adam and The Ants/(1980) Kings of the Wild Frontier/102 - "Antmusic".mp3]]></filename>
	<track>2</track>
	<time>214</time>
	<year>1980</year>
	<bitrate>128000</bitrate>
	<rate>44100</rate>
	<mode>cbr</mode>
	<mime>audio/mpeg</mime>
	<url><![CDATA[https://music.com.au/play/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=69404&uid=2&player=api&name=Adam%20and%20The%20Ants%20-%20-Antmusic-.mp3]]></url>
	<size>3428563</size>
	<mbid>437de9fd-0ab4-4715-b760-18efb8de7f81</mbid>
	<album_mbid></album_mbid>
	<artist_mbid></artist_mbid>
	<albumartist_mbid></albumartist_mbid>
	<art><![CDATA[https://music.com.au/image.php?object_id=50922&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<composer><![CDATA[]]></composer>
	<channels></channels>
	<comment><![CDATA[]]></comment>
	<publisher><![CDATA[Epic]]></publisher>
	<language></language>
	<replaygain_album_gain>0.000000</replaygain_album_gain>
	<replaygain_album_peak>0.000000</replaygain_album_peak>
	<replaygain_track_gain>-4.550000</replaygain_track_gain>
	<replaygain_track_peak>1.000000</replaygain_track_peak>
	<genre><![CDATA[New Wave]]></genre>
</song>
<song id="841633">
	<title><![CDATA["Are You Ready Jeff?" (acting out-takes from The Spirit of Man) 1]]></title>
	<name><![CDATA["Are You Ready Jeff?" (acting out-takes from The Spirit of Man) 1]]></name>
	<artist id="12888"><![CDATA[Jeff Wayne]]></artist>
	<album id="48413"><![CDATA[Jeff Wayne\'s Musical Version of The War of the Worlds]]></album>
	<tag id="61" count="1" ><![CDATA[Progressive Rock]]></tag>
	<filename><![CDATA[/mnt/music/Jeff Wayne/(1978) Jeff Wayne\'s Musical Version of The War of the Worlds [0960003000]/506 - "Are You Ready Jeff?" (acting out-takes from The Spirit of Man) 1.mp3]]></filename>
	<track>6</track>
	<time>88</time>
	<year>2005</year>
	<bitrate>320000</bitrate>
	<rate>44100</rate>
	<mode>cbr</mode>
	<mime>audio/mpeg</mime>
	<url><![CDATA[https://music.com.au/play/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=841633&uid=2&player=api&name=Jeff%20Wayne%20-%20-Are%20You%20Ready%20Jeff-%20-acting%20out-takes%20from%20The%20Spirit%20of%20Man-%201.mp3]]></url>
	<size>3586230</size>
	<mbid>892c818a-0967-4a59-8745-16c0e6fb8ade</mbid>
	<album_mbid></album_mbid>
	<artist_mbid></artist_mbid>
	<albumartist_mbid></albumartist_mbid>
	<art><![CDATA[https://music.com.au/image.php?object_id=48413&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<composer><![CDATA[]]></composer>
	<channels></channels>
	<comment><![CDATA[]]></comment>
	<publisher><![CDATA[Columbia]]></publisher>
	<language></language>
	<replaygain_album_gain>0.000000</replaygain_album_gain>
	<replaygain_album_peak>0.000000</replaygain_album_peak>
	<replaygain_track_gain>0.000000</replaygain_track_gain>
	<replaygain_track_peak>0.000000</replaygain_track_peak>
	<genre><![CDATA[Progressive Rock]]></genre>
</song>
<song id="841745">
	<title><![CDATA["Are You Ready Jeff?" (acting out-takes from The Spirit of Man) 2]]></title>
	<name><![CDATA["Are You Ready Jeff?" (acting out-takes from The Spirit of Man) 2]]></name>
	<artist id="12888"><![CDATA[Jeff Wayne]]></artist>
	<album id="48413"><![CDATA[Jeff Wayne\'s Musical Version of The War of the Worlds]]></album>
	<tag id="61" count="1" ><![CDATA[Progressive Rock]]></tag>
	<filename><![CDATA[/mnt/music/Jeff Wayne/(1978) Jeff Wayne\'s Musical Version of The War of the Worlds [0960003000]/507 - "Are You Ready Jeff?" (acting out-takes from The Spirit of Man) 2.mp3]]></filename>
	<track>7</track>
	<time>54</time>
	<year>2005</year>
	<bitrate>320000</bitrate>
	<rate>44100</rate>
	<mode>cbr</mode>
	<mime>audio/mpeg</mime>
	<url><![CDATA[https://music.com.au/play/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=841745&uid=2&player=api&name=Jeff%20Wayne%20-%20-Are%20You%20Ready%20Jeff-%20-acting%20out-takes%20from%20The%20Spirit%20of%20Man-%202.mp3]]></url>
	<size>2247715</size>
	<mbid>c88d01af-0491-43ee-b3ea-b64d851ffb45</mbid>
	<album_mbid></album_mbid>
	<artist_mbid></artist_mbid>
	<albumartist_mbid></albumartist_mbid>
	<art><![CDATA[https://music.com.au/image.php?object_id=48413&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<composer><![CDATA[]]></composer>
	<channels></channels>
	<comment><![CDATA[]]></comment>
	<publisher><![CDATA[Columbia]]></publisher>
	<language></language>
	<replaygain_album_gain>0.000000</replaygain_album_gain>
	<replaygain_album_peak>0.000000</replaygain_album_peak>
	<replaygain_track_gain>0.000000</replaygain_track_gain>
	<replaygain_track_peak>0.000000</replaygain_track_peak>
	<genre><![CDATA[Progressive Rock]]></genre>
</song>
<song id="789196">
	<title><![CDATA["Balls"]]></title>
	<name><![CDATA["Balls"]]></name>
	<artist id="10811"><![CDATA[The 2 Live Crew]]></artist>
	<album id="61845"><![CDATA[Sports Weekend: As Nasty As They Wanna Be, Part II]]></album>
	<tag id="1409" count="1" ><![CDATA[Hip Hop]]></tag>
	<filename><![CDATA[/mnt/music/The 2 Live Crew/(1991) Sports Weekend: As Nasty As They Wanna Be, Part II [7 91720-2]/124 - "Balls".mp3]]></filename>
	<track>24</track>
	<time>32</time>
	<year>1991</year>
	<bitrate>320000</bitrate>
	<rate>44100</rate>
	<mode>cbr</mode>
	<mime>audio/mpeg</mime>
	<url><![CDATA[https://music.com.au/play/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=789196&uid=2&player=api&name=The%202%20Live%20Crew%20-%20-Balls-.mp3]]></url>
	<size>1409778</size>
	<mbid>ddb63188-e428-4233-bc04-e94857e941b2</mbid>
	<album_mbid></album_mbid>
	<artist_mbid></artist_mbid>
	<albumartist_mbid></albumartist_mbid>
	<art><![CDATA[https://music.com.au/image.php?object_id=61845&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<composer><![CDATA[]]></composer>
	<channels></channels>
	<comment><![CDATA[]]></comment>
	<publisher><![CDATA[Atlantic]]></publisher>
	<language></language>
	<replaygain_album_gain>0.000000</replaygain_album_gain>
	<replaygain_album_peak>0.000000</replaygain_album_peak>
	<replaygain_track_gain>1.630000</replaygain_track_gain>
	<replaygain_track_peak>1.000000</replaygain_track_peak>
	<genre><![CDATA[Hip Hop]]></genre>
</song>
<song id="737732">
	<title><![CDATA["Btw, That Untitled Song on Your Mixtape Was for You. I Wrote It When I Missed You."]]></title>
	<name><![CDATA["Btw, That Untitled Song on Your Mixtape Was for You. I Wrote It When I Missed You."]]></name>
	<artist id="9183"><![CDATA[Suis la lune]]></artist>
	<album id="57559"><![CDATA[The First Five Years]]></album>
	<tag id="82" count="1" ><![CDATA[Hardcore]]></tag>
	<filename><![CDATA[/mnt/music/Suis la lune/(2017) The First Five Years [TJP-051]/116 - "Btw, That Untitled Song on Your Mixtape Was for You. I Wrote It When I Missed You.".mp3]]></filename>
	<track>16</track>
	<time>181</time>
	<year>2017</year>
	<bitrate>320000</bitrate>
	<rate>44100</rate>
	<mode>cbr</mode>
	<mime>audio/mpeg</mime>
	<url><![CDATA[https://music.com.au/play/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=737732&uid=2&player=api&name=Suis%20la%20lune%20-%20-Btw-%20That%20Untitled%20Song%20on%20Your%20Mixtape%20Was%20for%20You.%20I%20Wrote%20It%20When%20I%20Missed%20You.-.mp3]]></url>
	<size>7336804</size>
	<mbid>cbeb2304-caf2-48ea-943f-520c095fc83c</mbid>
	<album_mbid></album_mbid>
	<artist_mbid></artist_mbid>
	<albumartist_mbid></albumartist_mbid>
	<art><![CDATA[https://music.com.au/image.php?object_id=57559&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<composer><![CDATA[]]></composer>
	<channels></channels>
	<comment><![CDATA[]]></comment>
	<publisher><![CDATA[Tokyo Jupiter Records]]></publisher>
	<language></language>
	<replaygain_album_gain>0.000000</replaygain_album_gain>
	<replaygain_album_peak>0.000000</replaygain_album_peak>
	<replaygain_track_gain>-8.860000</replaygain_track_gain>
	<replaygain_track_peak>1.000000</replaygain_track_peak>
	<genre><![CDATA[Hardcore]]></genre>
</song>
<song id="765686">
	<title><![CDATA["C" Moon Cry Like a Baby]]></title>
	<name><![CDATA["C" Moon Cry Like a Baby]]></name>
	<artist id="9564"><![CDATA[Simple Minds]]></artist>
	<album id="60205"><![CDATA[Sparkle in the Rain]]></album>
	<tag id="47" count="1" ><![CDATA[Pop Rock]]></tag>
	<filename><![CDATA[/mnt/music/Simple Minds/(1984) Sparkle in the Rain [V2300]/108 - "C" Moon Cry Like a Baby.mp3]]></filename>
	<track>8</track>
	<time>261</time>
	<year>1984</year>
	<bitrate>320000</bitrate>
	<rate>44100</rate>
	<mode>cbr</mode>
	<mime>audio/mpeg</mime>
	<url><![CDATA[https://music.com.au/play/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=765686&uid=2&player=api&name=Simple%20Minds%20-%20-C-%20Moon%20Cry%20Like%20a%20Baby.mp3]]></url>
	<size>10519564</size>
	<mbid>4b348a71-d17c-451a-ab1b-acb87c2cc16a</mbid>
	<album_mbid></album_mbid>
	<artist_mbid></artist_mbid>
	<albumartist_mbid></albumartist_mbid>
	<art><![CDATA[https://music.com.au/image.php?object_id=60205&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<composer><![CDATA[]]></composer>
	<channels></channels>
	<comment><![CDATA[]]></comment>
	<publisher><![CDATA[Virgin]]></publisher>
	<language></language>
	<replaygain_album_gain>0.000000</replaygain_album_gain>
	<replaygain_album_peak>0.000000</replaygain_album_peak>
	<replaygain_track_gain>-2.750000</replaygain_track_gain>
	<replaygain_track_peak>0.832000</replaygain_track_peak>
	<genre><![CDATA[Pop Rock]]></genre>
</song>
<song id="827547">
	<title><![CDATA["Chips Bring a Party Down"]]></title>
	<name><![CDATA["Chips Bring a Party Down"]]></name>
	<artist id="12339"><![CDATA[The Sidekicks]]></artist>
	<album id="64631"><![CDATA[So Long, Soggy Dog]]></album>
	<filename><![CDATA[/mnt/music/The Sidekicks/(2007) So Long, Soggy Dog/105 - "Chips Bring a Party Down".mp3]]></filename>
	<track>5</track>
	<time>131</time>
	<year>2007</year>
	<bitrate>320000</bitrate>
	<rate>44100</rate>
	<mode>cbr</mode>
	<mime>audio/mpeg</mime>
	<url><![CDATA[https://music.com.au/play/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=827547&uid=2&player=api&name=The%20Sidekicks%20-%20-Chips%20Bring%20a%20Party%20Down-.mp3]]></url>
	<size>5276440</size>
	<mbid>fcf464ed-1088-4fa7-b3e3-9fff20f25651</mbid>
	<album_mbid></album_mbid>
	<artist_mbid></artist_mbid>
	<albumartist_mbid></albumartist_mbid>
	<art><![CDATA[https://music.com.au/image.php?object_id=64631&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<composer><![CDATA[]]></composer>
	<channels></channels>
	<comment><![CDATA[]]></comment>
	<publisher><![CDATA[Red Scare]]></publisher>
	<language></language>
	<replaygain_album_gain>0.000000</replaygain_album_gain>
	<replaygain_album_peak>0.000000</replaygain_album_peak>
	<replaygain_track_gain>-8.210000</replaygain_track_gain>
	<replaygain_track_peak>1.000000</replaygain_track_peak>
</song>
<song id="125381">
	<title><![CDATA["Destroy" Said, She]]></title>
	<name><![CDATA["Destroy" Said, She]]></name>
	<artist id="3156"><![CDATA[Youth Code]]></artist>
	<album id="53792"><![CDATA[Youth Code]]></album>
	<tag id="4" count="1" ><![CDATA[Electronic]]></tag>
	<filename><![CDATA[/mnt/music/Youth Code/(2013) Youth Code [DAIS 046]/104 - "Destroy" Said, She.mp3]]></filename>
	<track>4</track>
	<time>232</time>
	<year>2013</year>
	<bitrate>320000</bitrate>
	<rate>44100</rate>
	<mode>cbr</mode>
	<mime>audio/mpeg</mime>
	<url><![CDATA[https://music.com.au/play/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=125381&uid=2&player=api&name=Youth%20Code%20-%20-Destroy-%20Said-%20She.mp3]]></url>
	<size>9347909</size>
	<mbid>b6f76edd-18a9-492c-8461-e13f4d4ee80e</mbid>
	<album_mbid></album_mbid>
	<artist_mbid></artist_mbid>
	<albumartist_mbid></albumartist_mbid>
	<art><![CDATA[https://music.com.au/image.php?object_id=53792&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<composer><![CDATA[]]></composer>
	<channels></channels>
	<comment><![CDATA[Visit http://youthcode.bandcamp.com]]></comment>
	<publisher><![CDATA[Dais Records]]></publisher>
	<language>eng</language>
	<replaygain_album_gain>0.000000</replaygain_album_gain>
	<replaygain_album_peak>0.000000</replaygain_album_peak>
	<replaygain_track_gain>-5.950000</replaygain_track_gain>
	<replaygain_track_peak>1.000000</replaygain_track_peak>
	<genre><![CDATA[Electronic]]></genre>
</song>
</root>
```

## song

* MINIMUM_API_VERSION=380001

returns a single song
@param array $input

|Input   |Type|Description|Optional|
|--------|----|-----------|-------:|
|'filter'|    |UID of Song, returns song XML|NO      |

```XML
<?xml version="1.0" encoding="UTF-8" ?>
<root>
<total_count>1</total_count>
<song id="77371">
	<title><![CDATA[Welcome to Planet Sexor]]></title>
	<name><![CDATA[Welcome to Planet Sexor]]></name>
	<artist id="4144"><![CDATA[Tiga]]></artist>
	<album id="51457"><![CDATA[Sexor]]></album>
	<tag id="4" count="1" ><![CDATA[Electronic]]></tag>
	<filename><![CDATA[/mnt/music/Tiga/(2005) Sexor/101 - Welcome to Planet Sexor.mp3]]></filename>
	<track>1</track>
	<time>50</time>
	<year>2006</year>
	<bitrate>192000</bitrate>
	<rate>44100</rate>
	<mode>cbr</mode>
	<mime>audio/mpeg</mime>
	<url><![CDATA[https://music.com.au/play/index.php?ssid=e07b04026bb95d2cc47190afa7feab6e&type=song&oid=77371&uid=2&player=api&name=Tiga%20-%20Welcome%20to%20Planet%20Sexor.mp3]]></url>
	<size>1209827</size>
	<mbid>936650f9-00e4-4476-accd-ccb5cf2c1d5b</mbid>
	<album_mbid></album_mbid>
	<artist_mbid></artist_mbid>
	<albumartist_mbid></albumartist_mbid>
	<art><![CDATA[https://music.com.au/image.php?object_id=51457&object_type=album&auth=e07b04026bb95d2cc47190afa7feab6e&name=art.jpg]]></art>
	<flag>0</flag>
	<preciserating>1</preciserating>
	<rating>1</rating>
	<averagerating>0</averagerating>
	<composer><![CDATA[]]></composer>
	<channels></channels>
	<comment><![CDATA[]]></comment>
	<publisher><![CDATA[Play It Again Sam; Different Recordings]]></publisher>
	<language></language>
	<replaygain_album_gain>0.000000</replaygain_album_gain>
	<replaygain_album_peak>0.000000</replaygain_album_peak>
	<replaygain_track_gain>-5.270000</replaygain_track_gain>
	<replaygain_track_peak>1.000000</replaygain_track_peak>
	<encoding><![CDATA[UTF-8]]></encoding>
	<disk><![CDATA[1]]></disk>
	<totaldisks><![CDATA[1]]></totaldisks>
	<band><![CDATA[Tiga]]></band>
	<release_type><![CDATA[album]]></release_type>
	<barcode><![CDATA[5413356594027]]></barcode>
	<audio_codec><![CDATA[mp3]]></audio_codec>
	<recording_time><![CDATA[2006-02-06]]></recording_time>
	<bpm><![CDATA[114]]></bpm>
	<album_artist_sort_order><![CDATA[Tiga]]></album_artist_sort_order>
	<performer_sort_order><![CDATA[Tiga]]></performer_sort_order>
	<media_type><![CDATA[CD]]></media_type>
	<original_release_time><![CDATA[2005-12]]></original_release_time>
	<totaltracks><![CDATA[14]]></totaltracks>
	<track_number><![CDATA[1]]></track_number>
	<isrc><![CDATA[BEP010500070]]></isrc>
	<tagging_time><![CDATA[2013-07-24T07:48:29]]></tagging_time>
	<genre><![CDATA[Electronic]]></genre>
</song>
</root>

```

## playlists

* MINIMUM_API_VERSION=380001

This returns playlists based on the specified filter
@param array $input

|Input   |Type|Description|Optional|
|--------|----|-----------|-------:|
|'filter'|    |Value is Alpha Match for returned results, may be more than one letter/number|YES     |
|'exact' |boolean|if true filter is exact rather then fuzzy|YES     |
|'add'    |set_filter|ISO 8601 Date Format assumed filter method is newer then specified date, however [START]/[END] can be specified to receive only results added between two dates|YES     |
|'update' |set_filter|ISO 8601 Date Format assumed filter method is newer then specified date, however [START]/[END] can be specified to receive only results updated between two dates|YES     |
|'offset'|    |           |YES     |
|'limit' |    |           |YES     |

```XML
<?xml version="1.0" encoding="UTF-8" ?>
<root>
<total_count>25</total_count>
<playlist id="2002">
	<name><![CDATA[familyradio]]></name>
	<owner><![CDATA[System]]></owner>
	<items>12294</items>
	<type>private</type>
</playlist>
<playlist id="1992">
	<name><![CDATA[glen - 4/5 stars]]></name>
	<owner><![CDATA[glen]]></owner>
	<items>8</items>
	<type>public</type>
</playlist>
<playlist id="10">
	<name><![CDATA[lachlan - 4/5 stars]]></name>
	<owner><![CDATA[myuser]]></owner>
	<items>1633</items>
	<type>public</type>
</playlist>
<playlist id="15">
	<name><![CDATA[lachlan - 5 Star Albums]]></name>
	<owner><![CDATA[myuser]]></owner>
	<items>10478</items>
	<type>public</type>
</playlist>
<playlist id="11">
	<name><![CDATA[family - 4/5 stars]]></name>
	<owner><![CDATA[family]]></owner>
	<items>1934</items>
	<type>public</type>
</playlist>
<playlist id="16">
	<name><![CDATA[family - 5 Star Albums]]></name>
	<owner><![CDATA[family]]></owner>
	<items>1026</items>
	<type>public</type>
</playlist>
<playlist id="1994">
	<name><![CDATA[family mixed]]></name>
	<owner><![CDATA[family]]></owner>
	<items>3112</items>
	<type>private</type>
</playlist>
<playlist id="19">
	<name><![CDATA[familyRadio]]></name>
	<owner><![CDATA[family]]></owner>
	<items>4281</items>
	<type>private</type>
</playlist>
<playlist id="2004">
	<name><![CDATA[Rated album Unplayed tracks (tdawg)]]></name>
	<owner><![CDATA[tdawg]]></owner>
	<items>3803</items>
	<type>private</type>
</playlist>
<playlist id="14">
	<name><![CDATA[Rebel Radio mkIII]]></name>
	<owner><![CDATA[myuser]]></owner>
	<items>11384</items>
	<type>private</type>
</playlist>
<playlist id="1991">
	<name><![CDATA[sam - 4/5 stars]]></name>
	<owner><![CDATA[sam]]></owner>
	<items>1</items>
	<type>public</type>
</playlist>
<playlist id="1990">
	<name><![CDATA[sam - 5 Star Albums]]></name>
	<owner><![CDATA[sam]]></owner>
	<items>14</items>
	<type>public</type>
</playlist>
<playlist id="17">
	<name><![CDATA[tdawg - 4/5 stars]]></name>
	<owner><![CDATA[tdawg]]></owner>
	<items>532</items>
	<type>public</type>
</playlist>
<playlist id="18">
	<name><![CDATA[tdawg - 5 Star Albums]]></name>
	<owner><![CDATA[tdawg]]></owner>
	<items>1366</items>
	<type>public</type>
</playlist>
<playlist id="smart_21">
	<name><![CDATA[!Played for 5yrs]]></name>
	<owner><![CDATA[public]]></owner>
	<items>5000</items>
	<type>public</type>
</playlist>
<playlist id="smart_129">
	<name><![CDATA[3* Artist/Album]]></name>
	<owner><![CDATA[public]]></owner>
	<items>5000</items>
	<type>public</type>
</playlist>
<playlist id="smart_2">
	<name><![CDATA[3*+ catchup tracks]]></name>
	<owner><![CDATA[public]]></owner>
	<items>50</items>
	<type>public</type>
</playlist>
<playlist id="smart_13">
	<name><![CDATA[50 Albums Unplayed]]></name>
	<owner><![CDATA[public]]></owner>
	<items>50</items>
	<type>public</type>
</playlist>
<playlist id="smart_10">
	<name><![CDATA[50 Artist Unplayed]]></name>
	<owner><![CDATA[public]]></owner>
	<items>50</items>
	<type>public</type>
</playlist>
<playlist id="smart_7">
	<name><![CDATA[50 Unplayed]]></name>
	<owner><![CDATA[public]]></owner>
	<items>50</items>
	<type>public</type>
</playlist>
<playlist id="smart_118">
	<name><![CDATA[album track 600 days unplayed]]></name>
	<owner><![CDATA[public]]></owner>
	<items>5000</items>
	<type>public</type>
</playlist>
<playlist id="smart_117">
	<name><![CDATA[album unplayed track]]></name>
	<owner><![CDATA[public]]></owner>
	<items>5000</items>
	<type>public</type>
</playlist>
<playlist id="smart_1">
	<name><![CDATA[Catchup Tracks]]></name>
	<owner><![CDATA[public]]></owner>
	<items>50</items>
	<type>public</type>
</playlist>
<playlist id="smart_3">
	<name><![CDATA[Songs >2*]]></name>
	<owner><![CDATA[public]]></owner>
	<items>5000</items>
	<type>public</type>
</playlist>
</root>

```

## playlist

* MINIMUM_API_VERSION=380001

This returns a single playlist
@param array $input

|Input   |Type|Description|Optional|
|--------|----|-----------|-------:|
|'filter'|    |UID of playlist, returns playlist XML|NO      |

```XML
<?xml version="1.0" encoding="UTF-8" ?>
<root>
<total_count>1</total_count>
<playlist id="1990">
	<name><![CDATA[sam - 5 Star Albums]]></name>
	<owner><![CDATA[sam]]></owner>
	<items>14</items>
	<type>public</type>
</playlist>
</root>
```

## playlist_songs

* MINIMUM_API_VERSION=380001

This returns the songs for a playlist
@param array $input

|Input   |Type|Description|Optional|
|--------|----|-----------|-------:|
|'filter'|    |UID of Playlist, returns song XML|NO      |
|'offset'|    |           |YES     |
|'limit' |    |           |YES     |

```XML
<?xml version="1.0" encoding="UTF-8" ?>
<root>
<total_count>14</total_count>
<song id="85881">
	<title><![CDATA[Zero]]></title>
	<name><![CDATA[Zero]]></name>
	<artist id="1240"><![CDATA[The Smashing Pumpkins]]></artist>
	<album id="15698"><![CDATA[Mellon Collie and the Infinite Sadness]]></album>
	<tag id="33" count="1" ><![CDATA[Alternative Rock]]></tag>
	<filename><![CDATA[/mnt/music/The Smashing Pumpkins/(1995) Mellon Collie and the Infinite Sadness/104 - Zero.mp3]]></filename>
	<track>4</track>
	<playlisttrack>1</playlisttrack>
	<time>160</time>
	<year>1995</year>
	<bitrate>160000</bitrate>
	<rate>44100</rate>
	<mode>cbr</mode>
	<mime>audio/mpeg</mime>
	<url><![CDATA[https://music.com.au/play/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=85881&uid=2&player=api&name=The%20Smashing%20Pumpkins%20-%20Zero.mp3]]></url>
	<size>3215195</size>
	<mbid>239e517c-03e8-4291-9478-66c2cc936f0c</mbid>
	<album_mbid></album_mbid>
	<artist_mbid></artist_mbid>
	<albumartist_mbid></albumartist_mbid>
	<art><![CDATA[https://music.com.au/image.php?object_id=15698&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg]]></art>
	<flag>1</flag>
	<preciserating>5</preciserating>
	<rating>5</rating>
	<averagerating>0</averagerating>
	<composer><![CDATA[]]></composer>
	<channels></channels>
	<comment><![CDATA[]]></comment>
	<publisher><![CDATA[Virgin]]></publisher>
	<language></language>
	<replaygain_album_gain>0.000000</replaygain_album_gain>
	<replaygain_album_peak>0.000000</replaygain_album_peak>
	<replaygain_track_gain>-8.000000</replaygain_track_gain>
	<replaygain_track_peak>0.989000</replaygain_track_peak>
	<genre><![CDATA[Alternative Rock]]></genre>
</song>
<song id="85880">
	<title><![CDATA[Muzzle]]></title>
	<name><![CDATA[Muzzle]]></name>
	<artist id="1240"><![CDATA[The Smashing Pumpkins]]></artist>
	<album id="15698"><![CDATA[Mellon Collie and the Infinite Sadness]]></album>
	<tag id="33" count="1" ><![CDATA[Alternative Rock]]></tag>
	<filename><![CDATA[/mnt/music/The Smashing Pumpkins/(1995) Mellon Collie and the Infinite Sadness/112 - Muzzle.mp3]]></filename>
	<track>12</track>
	<playlisttrack>2</playlisttrack>
	<time>224</time>
	<year>1995</year>
	<bitrate>160000</bitrate>
	<rate>44100</rate>
	<mode>cbr</mode>
	<mime>audio/mpeg</mime>
	<url><![CDATA[https://music.com.au/play/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=85880&uid=2&player=api&name=The%20Smashing%20Pumpkins%20-%20Muzzle.mp3]]></url>
	<size>4491015</size>
	<mbid>bd866229-2880-4693-94a3-f1e39154f973</mbid>
	<album_mbid></album_mbid>
	<artist_mbid></artist_mbid>
	<albumartist_mbid></albumartist_mbid>
	<art><![CDATA[https://music.com.au/image.php?object_id=15698&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<composer><![CDATA[]]></composer>
	<channels></channels>
	<comment><![CDATA[]]></comment>
	<publisher><![CDATA[Virgin]]></publisher>
	<language></language>
	<replaygain_album_gain>0.000000</replaygain_album_gain>
	<replaygain_album_peak>0.000000</replaygain_album_peak>
	<replaygain_track_gain>-6.580000</replaygain_track_gain>
	<replaygain_track_peak>0.989000</replaygain_track_peak>
	<genre><![CDATA[Alternative Rock]]></genre>
</song>
<song id="85878">
	<title><![CDATA[Jellybelly]]></title>
	<name><![CDATA[Jellybelly]]></name>
	<artist id="1240"><![CDATA[The Smashing Pumpkins]]></artist>
	<album id="15698"><![CDATA[Mellon Collie and the Infinite Sadness]]></album>
	<tag id="33" count="1" ><![CDATA[Alternative Rock]]></tag>
	<filename><![CDATA[/mnt/music/The Smashing Pumpkins/(1995) Mellon Collie and the Infinite Sadness/103 - Jellybelly.mp3]]></filename>
	<track>3</track>
	<playlisttrack>3</playlisttrack>
	<time>181</time>
	<year>1995</year>
	<bitrate>160000</bitrate>
	<rate>44100</rate>
	<mode>cbr</mode>
	<mime>audio/mpeg</mime>
	<url><![CDATA[https://music.com.au/play/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=85878&uid=2&player=api&name=The%20Smashing%20Pumpkins%20-%20Jellybelly.mp3]]></url>
	<size>3636289</size>
	<mbid>cf34c057-17d0-4a0d-832a-cf3480538f46</mbid>
	<album_mbid></album_mbid>
	<artist_mbid></artist_mbid>
	<albumartist_mbid></albumartist_mbid>
	<art><![CDATA[https://music.com.au/image.php?object_id=15698&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<composer><![CDATA[]]></composer>
	<channels></channels>
	<comment><![CDATA[]]></comment>
	<publisher><![CDATA[Virgin]]></publisher>
	<language></language>
	<replaygain_album_gain>0.000000</replaygain_album_gain>
	<replaygain_album_peak>0.000000</replaygain_album_peak>
	<replaygain_track_gain>-7.590000</replaygain_track_gain>
	<replaygain_track_peak>1.000000</replaygain_track_peak>
	<genre><![CDATA[Alternative Rock]]></genre>
</song>
<song id="85860">
	<title><![CDATA[Mellon Collie and the Infinite Sadness]]></title>
	<name><![CDATA[Mellon Collie and the Infinite Sadness]]></name>
	<artist id="1240"><![CDATA[The Smashing Pumpkins]]></artist>
	<album id="15698"><![CDATA[Mellon Collie and the Infinite Sadness]]></album>
	<tag id="33" count="1" ><![CDATA[Alternative Rock]]></tag>
	<filename><![CDATA[/mnt/music/The Smashing Pumpkins/(1995) Mellon Collie and the Infinite Sadness/101 - Mellon Collie and the Infinite Sadness.mp3]]></filename>
	<track>1</track>
	<playlisttrack>4</playlisttrack>
	<time>172</time>
	<year>1995</year>
	<bitrate>160000</bitrate>
	<rate>44100</rate>
	<mode>cbr</mode>
	<mime>audio/mpeg</mime>
	<url><![CDATA[https://music.com.au/play/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=85860&uid=2&player=api&name=The%20Smashing%20Pumpkins%20-%20Mellon%20Collie%20and%20the%20Infinite%20Sadness.mp3]]></url>
	<size>3447685</size>
	<mbid>d5165d2d-be7c-4555-8bd8-630e2085c090</mbid>
	<album_mbid></album_mbid>
	<artist_mbid></artist_mbid>
	<albumartist_mbid></albumartist_mbid>
	<art><![CDATA[https://music.com.au/image.php?object_id=15698&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg]]></art>
	<flag>1</flag>
	<preciserating>5</preciserating>
	<rating>5</rating>
	<averagerating>0</averagerating>
	<composer><![CDATA[]]></composer>
	<channels></channels>
	<comment><![CDATA[]]></comment>
	<publisher><![CDATA[Virgin]]></publisher>
	<language></language>
	<replaygain_album_gain>0.000000</replaygain_album_gain>
	<replaygain_album_peak>0.000000</replaygain_album_peak>
	<replaygain_track_gain>5.060000</replaygain_track_gain>
	<replaygain_track_peak>0.519000</replaygain_track_peak>
	<genre><![CDATA[Alternative Rock]]></genre>
</song>
<song id="85869">
	<title><![CDATA[Love]]></title>
	<name><![CDATA[Love]]></name>
	<artist id="1240"><![CDATA[The Smashing Pumpkins]]></artist>
	<album id="15698"><![CDATA[Mellon Collie and the Infinite Sadness]]></album>
	<tag id="33" count="1" ><![CDATA[Alternative Rock]]></tag>
	<filename><![CDATA[/mnt/music/The Smashing Pumpkins/(1995) Mellon Collie and the Infinite Sadness/109 - Love.mp3]]></filename>
	<track>9</track>
	<playlisttrack>5</playlisttrack>
	<time>261</time>
	<year>1995</year>
	<bitrate>160000</bitrate>
	<rate>44100</rate>
	<mode>cbr</mode>
	<mime>audio/mpeg</mime>
	<url><![CDATA[https://music.com.au/play/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=85869&uid=2&player=api&name=The%20Smashing%20Pumpkins%20-%20Love.mp3]]></url>
	<size>5239162</size>
	<mbid>ea2a3417-5640-469c-a0a0-89d96bfbd1f0</mbid>
	<album_mbid></album_mbid>
	<artist_mbid></artist_mbid>
	<albumartist_mbid></albumartist_mbid>
	<art><![CDATA[https://music.com.au/image.php?object_id=15698&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<composer><![CDATA[]]></composer>
	<channels></channels>
	<comment><![CDATA[]]></comment>
	<publisher><![CDATA[Virgin]]></publisher>
	<language></language>
	<replaygain_album_gain>0.000000</replaygain_album_gain>
	<replaygain_album_peak>0.000000</replaygain_album_peak>
	<replaygain_track_gain>-6.590000</replaygain_track_gain>
	<replaygain_track_peak>1.000000</replaygain_track_peak>
	<genre><![CDATA[Alternative Rock]]></genre>
</song>
<song id="85884">
	<title><![CDATA[Galapogos]]></title>
	<name><![CDATA[Galapogos]]></name>
	<artist id="1240"><![CDATA[The Smashing Pumpkins]]></artist>
	<album id="15698"><![CDATA[Mellon Collie and the Infinite Sadness]]></album>
	<tag id="33" count="1" ><![CDATA[Alternative Rock]]></tag>
	<filename><![CDATA[/mnt/music/The Smashing Pumpkins/(1995) Mellon Collie and the Infinite Sadness/111 - Galapogos.mp3]]></filename>
	<track>11</track>
	<playlisttrack>6</playlisttrack>
	<time>286</time>
	<year>1995</year>
	<bitrate>160000</bitrate>
	<rate>44100</rate>
	<mode>cbr</mode>
	<mime>audio/mpeg</mime>
	<url><![CDATA[https://music.com.au/play/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=85884&uid=2&player=api&name=The%20Smashing%20Pumpkins%20-%20Galapogos.mp3]]></url>
	<size>5732354</size>
	<mbid>f742a49d-e6d2-4760-9bd4-77b32ccb54ea</mbid>
	<album_mbid></album_mbid>
	<artist_mbid></artist_mbid>
	<albumartist_mbid></albumartist_mbid>
	<art><![CDATA[https://music.com.au/image.php?object_id=15698&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg]]></art>
	<flag>0</flag>
	<preciserating>3</preciserating>
	<rating>3</rating>
	<averagerating>0</averagerating>
	<composer><![CDATA[]]></composer>
	<channels></channels>
	<comment><![CDATA[]]></comment>
	<publisher><![CDATA[Virgin]]></publisher>
	<language></language>
	<replaygain_album_gain>0.000000</replaygain_album_gain>
	<replaygain_album_peak>0.000000</replaygain_album_peak>
	<replaygain_track_gain>-3.460000</replaygain_track_gain>
	<replaygain_track_peak>1.000000</replaygain_track_peak>
	<genre><![CDATA[Alternative Rock]]></genre>
</song>
<song id="85874">
	<title><![CDATA[Cupid de Locke]]></title>
	<name><![CDATA[Cupid de Locke]]></name>
	<artist id="1240"><![CDATA[The Smashing Pumpkins]]></artist>
	<album id="15698"><![CDATA[Mellon Collie and the Infinite Sadness]]></album>
	<tag id="33" count="1" ><![CDATA[Alternative Rock]]></tag>
	<filename><![CDATA[/mnt/music/The Smashing Pumpkins/(1995) Mellon Collie and the Infinite Sadness/110 - Cupid de Locke.mp3]]></filename>
	<track>10</track>
	<playlisttrack>7</playlisttrack>
	<time>170</time>
	<year>1995</year>
	<bitrate>160000</bitrate>
	<rate>44100</rate>
	<mode>cbr</mode>
	<mime>audio/mpeg</mime>
	<url><![CDATA[https://music.com.au/play/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=85874&uid=2&player=api&name=The%20Smashing%20Pumpkins%20-%20Cupid%20de%20Locke.mp3]]></url>
	<size>3410068</size>
	<mbid>537050f2-7407-4c44-8031-cbc20156af7d</mbid>
	<album_mbid></album_mbid>
	<artist_mbid></artist_mbid>
	<albumartist_mbid></albumartist_mbid>
	<art><![CDATA[https://music.com.au/image.php?object_id=15698&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<composer><![CDATA[]]></composer>
	<channels></channels>
	<comment><![CDATA[]]></comment>
	<publisher><![CDATA[Virgin]]></publisher>
	<language></language>
	<replaygain_album_gain>0.000000</replaygain_album_gain>
	<replaygain_album_peak>0.000000</replaygain_album_peak>
	<replaygain_track_gain>-6.210000</replaygain_track_gain>
	<replaygain_track_peak>1.000000</replaygain_track_peak>
	<genre><![CDATA[Alternative Rock]]></genre>
</song>
<song id="85863">
	<title><![CDATA[Porcelina of the Vast Oceans]]></title>
	<name><![CDATA[Porcelina of the Vast Oceans]]></name>
	<artist id="1240"><![CDATA[The Smashing Pumpkins]]></artist>
	<album id="15698"><![CDATA[Mellon Collie and the Infinite Sadness]]></album>
	<tag id="33" count="1" ><![CDATA[Alternative Rock]]></tag>
	<filename><![CDATA[/mnt/music/The Smashing Pumpkins/(1995) Mellon Collie and the Infinite Sadness/113 - Porcelina of the Vast Oceans.mp3]]></filename>
	<track>13</track>
	<playlisttrack>8</playlisttrack>
	<time>561</time>
	<year>1995</year>
	<bitrate>160000</bitrate>
	<rate>44100</rate>
	<mode>cbr</mode>
	<mime>audio/mpeg</mime>
	<url><![CDATA[https://music.com.au/play/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=85863&uid=2&player=api&name=The%20Smashing%20Pumpkins%20-%20Porcelina%20of%20the%20Vast%20Oceans.mp3]]></url>
	<size>11229040</size>
	<mbid>7a5db67e-1882-431f-9535-a401c6d6c03a</mbid>
	<album_mbid></album_mbid>
	<artist_mbid></artist_mbid>
	<albumartist_mbid></albumartist_mbid>
	<art><![CDATA[https://music.com.au/image.php?object_id=15698&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<composer><![CDATA[]]></composer>
	<channels></channels>
	<comment><![CDATA[]]></comment>
	<publisher><![CDATA[Virgin]]></publisher>
	<language></language>
	<replaygain_album_gain>0.000000</replaygain_album_gain>
	<replaygain_album_peak>0.000000</replaygain_album_peak>
	<replaygain_track_gain>-5.990000</replaygain_track_gain>
	<replaygain_track_peak>1.000000</replaygain_track_peak>
	<genre><![CDATA[Alternative Rock]]></genre>
</song>
<song id="85873">
	<title><![CDATA[Fuck You (An Ode to No One)]]></title>
	<name><![CDATA[Fuck You (An Ode to No One)]]></name>
	<artist id="1240"><![CDATA[The Smashing Pumpkins]]></artist>
	<album id="15698"><![CDATA[Mellon Collie and the Infinite Sadness]]></album>
	<tag id="33" count="1" ><![CDATA[Alternative Rock]]></tag>
	<filename><![CDATA[/mnt/music/The Smashing Pumpkins/(1995) Mellon Collie and the Infinite Sadness/108 - Fuck You (An Ode to No One).mp3]]></filename>
	<track>8</track>
	<playlisttrack>9</playlisttrack>
	<time>290</time>
	<year>1995</year>
	<bitrate>160000</bitrate>
	<rate>44100</rate>
	<mode>cbr</mode>
	<mime>audio/mpeg</mime>
	<url><![CDATA[https://music.com.au/play/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=85873&uid=2&player=api&name=The%20Smashing%20Pumpkins%20-%20Fuck%20You%20-An%20Ode%20to%20No%20One-.mp3]]></url>
	<size>5821693</size>
	<mbid>65f85046-d1d0-4d5e-94fe-9d0eb5a54aa4</mbid>
	<album_mbid></album_mbid>
	<artist_mbid></artist_mbid>
	<albumartist_mbid></albumartist_mbid>
	<art><![CDATA[https://music.com.au/image.php?object_id=15698&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg]]></art>
	<flag>1</flag>
	<preciserating>5</preciserating>
	<rating>5</rating>
	<averagerating>0</averagerating>
	<composer><![CDATA[]]></composer>
	<channels></channels>
	<comment><![CDATA[]]></comment>
	<publisher><![CDATA[Virgin]]></publisher>
	<language></language>
	<replaygain_album_gain>0.000000</replaygain_album_gain>
	<replaygain_album_peak>0.000000</replaygain_album_peak>
	<replaygain_track_gain>-6.530000</replaygain_track_gain>
	<replaygain_track_peak>1.000000</replaygain_track_peak>
	<genre><![CDATA[Alternative Rock]]></genre>
</song>
<song id="85859">
	<title><![CDATA[Here Is No Why]]></title>
	<name><![CDATA[Here Is No Why]]></name>
	<artist id="1240"><![CDATA[The Smashing Pumpkins]]></artist>
	<album id="15698"><![CDATA[Mellon Collie and the Infinite Sadness]]></album>
	<tag id="33" count="1" ><![CDATA[Alternative Rock]]></tag>
	<filename><![CDATA[/mnt/music/The Smashing Pumpkins/(1995) Mellon Collie and the Infinite Sadness/105 - Here Is No Why.mp3]]></filename>
	<track>5</track>
	<playlisttrack>10</playlisttrack>
	<time>224</time>
	<year>1995</year>
	<bitrate>160000</bitrate>
	<rate>44100</rate>
	<mode>cbr</mode>
	<mime>audio/mpeg</mime>
	<url><![CDATA[https://music.com.au/play/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=85859&uid=2&player=api&name=The%20Smashing%20Pumpkins%20-%20Here%20Is%20No%20Why.mp3]]></url>
	<size>4499375</size>
	<mbid>65699ede-02ff-4b42-ad32-708201145f96</mbid>
	<album_mbid></album_mbid>
	<artist_mbid></artist_mbid>
	<albumartist_mbid></albumartist_mbid>
	<art><![CDATA[https://music.com.au/image.php?object_id=15698&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg]]></art>
	<flag>0</flag>
	<preciserating>3</preciserating>
	<rating>3</rating>
	<averagerating>0</averagerating>
	<composer><![CDATA[]]></composer>
	<channels></channels>
	<comment><![CDATA[]]></comment>
	<publisher><![CDATA[Virgin]]></publisher>
	<language></language>
	<replaygain_album_gain>0.000000</replaygain_album_gain>
	<replaygain_album_peak>0.000000</replaygain_album_peak>
	<replaygain_track_gain>-7.540000</replaygain_track_gain>
	<replaygain_track_peak>1.000000</replaygain_track_peak>
	<genre><![CDATA[Alternative Rock]]></genre>
</song>
<song id="85882">
	<title><![CDATA[Bullet With Butterfly Wings]]></title>
	<name><![CDATA[Bullet With Butterfly Wings]]></name>
	<artist id="1240"><![CDATA[The Smashing Pumpkins]]></artist>
	<album id="15698"><![CDATA[Mellon Collie and the Infinite Sadness]]></album>
	<tag id="33" count="1" ><![CDATA[Alternative Rock]]></tag>
	<filename><![CDATA[/mnt/music/The Smashing Pumpkins/(1995) Mellon Collie and the Infinite Sadness/106 - Bullet With Butterfly Wings.mp3]]></filename>
	<track>6</track>
	<playlisttrack>11</playlisttrack>
	<time>258</time>
	<year>1995</year>
	<bitrate>160000</bitrate>
	<rate>44100</rate>
	<mode>cbr</mode>
	<mime>audio/mpeg</mime>
	<url><![CDATA[https://music.com.au/play/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=85882&uid=2&player=api&name=The%20Smashing%20Pumpkins%20-%20Bullet%20With%20Butterfly%20Wings.mp3]]></url>
	<size>5166542</size>
	<mbid>7c1f143a-f016-4cb0-be79-c4467dd800e0</mbid>
	<album_mbid></album_mbid>
	<artist_mbid></artist_mbid>
	<albumartist_mbid></albumartist_mbid>
	<art><![CDATA[https://music.com.au/image.php?object_id=15698&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg]]></art>
	<flag>1</flag>
	<preciserating>5</preciserating>
	<rating>5</rating>
	<averagerating>0</averagerating>
	<composer><![CDATA[]]></composer>
	<channels></channels>
	<comment><![CDATA[]]></comment>
	<publisher><![CDATA[Virgin]]></publisher>
	<language></language>
	<replaygain_album_gain>0.000000</replaygain_album_gain>
	<replaygain_album_peak>0.000000</replaygain_album_peak>
	<replaygain_track_gain>-6.530000</replaygain_track_gain>
	<replaygain_track_peak>1.000000</replaygain_track_peak>
	<genre><![CDATA[Alternative Rock]]></genre>
</song>
<song id="85867">
	<title><![CDATA[Take Me Down]]></title>
	<name><![CDATA[Take Me Down]]></name>
	<artist id="1240"><![CDATA[The Smashing Pumpkins]]></artist>
	<album id="15698"><![CDATA[Mellon Collie and the Infinite Sadness]]></album>
	<tag id="33" count="1" ><![CDATA[Alternative Rock]]></tag>
	<filename><![CDATA[/mnt/music/The Smashing Pumpkins/(1995) Mellon Collie and the Infinite Sadness/114 - Take Me Down.mp3]]></filename>
	<track>14</track>
	<playlisttrack>12</playlisttrack>
	<time>171</time>
	<year>1995</year>
	<bitrate>160000</bitrate>
	<rate>44100</rate>
	<mode>cbr</mode>
	<mime>audio/mpeg</mime>
	<url><![CDATA[https://music.com.au/play/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=85867&uid=2&player=api&name=The%20Smashing%20Pumpkins%20-%20Take%20Me%20Down.mp3]]></url>
	<size>3438281</size>
	<mbid>d19ee9ba-98ca-41e5-a394-d7af59cf70c9</mbid>
	<album_mbid></album_mbid>
	<artist_mbid></artist_mbid>
	<albumartist_mbid></albumartist_mbid>
	<art><![CDATA[https://music.com.au/image.php?object_id=15698&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<composer><![CDATA[]]></composer>
	<channels></channels>
	<comment><![CDATA[]]></comment>
	<publisher><![CDATA[Virgin]]></publisher>
	<language></language>
	<replaygain_album_gain>0.000000</replaygain_album_gain>
	<replaygain_album_peak>0.000000</replaygain_album_peak>
	<replaygain_track_gain>-2.260000</replaygain_track_gain>
	<replaygain_track_peak>0.902000</replaygain_track_peak>
	<genre><![CDATA[Alternative Rock]]></genre>
</song>
<song id="85877">
	<title><![CDATA[To Forgive]]></title>
	<name><![CDATA[To Forgive]]></name>
	<artist id="1240"><![CDATA[The Smashing Pumpkins]]></artist>
	<album id="15698"><![CDATA[Mellon Collie and the Infinite Sadness]]></album>
	<tag id="33" count="1" ><![CDATA[Alternative Rock]]></tag>
	<filename><![CDATA[/mnt/music/The Smashing Pumpkins/(1995) Mellon Collie and the Infinite Sadness/107 - To Forgive.mp3]]></filename>
	<track>7</track>
	<playlisttrack>13</playlisttrack>
	<time>256</time>
	<year>1995</year>
	<bitrate>160000</bitrate>
	<rate>44100</rate>
	<mode>cbr</mode>
	<mime>audio/mpeg</mime>
	<url><![CDATA[https://music.com.au/play/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=85877&uid=2&player=api&name=The%20Smashing%20Pumpkins%20-%20To%20Forgive.mp3]]></url>
	<size>5140420</size>
	<mbid>c6c704b1-4043-4f2e-828a-0af5e5f34233</mbid>
	<album_mbid></album_mbid>
	<artist_mbid></artist_mbid>
	<albumartist_mbid></albumartist_mbid>
	<art><![CDATA[https://music.com.au/image.php?object_id=15698&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<composer><![CDATA[]]></composer>
	<channels></channels>
	<comment><![CDATA[]]></comment>
	<publisher><![CDATA[Virgin]]></publisher>
	<language></language>
	<replaygain_album_gain>0.000000</replaygain_album_gain>
	<replaygain_album_peak>0.000000</replaygain_album_peak>
	<replaygain_track_gain>-4.180000</replaygain_track_gain>
	<replaygain_track_peak>1.000000</replaygain_track_peak>
	<genre><![CDATA[Alternative Rock]]></genre>
</song>
<song id="85866">
	<title><![CDATA[Tonight, Tonight]]></title>
	<name><![CDATA[Tonight, Tonight]]></name>
	<artist id="1240"><![CDATA[The Smashing Pumpkins]]></artist>
	<album id="15698"><![CDATA[Mellon Collie and the Infinite Sadness]]></album>
	<tag id="33" count="1" ><![CDATA[Alternative Rock]]></tag>
	<filename><![CDATA[/mnt/music/The Smashing Pumpkins/(1995) Mellon Collie and the Infinite Sadness/102 - Tonight, Tonight.mp3]]></filename>
	<track>2</track>
	<playlisttrack>14</playlisttrack>
	<time>254</time>
	<year>1995</year>
	<bitrate>160000</bitrate>
	<rate>44100</rate>
	<mode>cbr</mode>
	<mime>audio/mpeg</mime>
	<url><![CDATA[https://music.com.au/play/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=85866&uid=2&player=api&name=The%20Smashing%20Pumpkins%20-%20Tonight-%20Tonight.mp3]]></url>
	<size>5096534</size>
	<mbid>d07057c1-312b-4a7e-b129-dd7383539f57</mbid>
	<album_mbid></album_mbid>
	<artist_mbid></artist_mbid>
	<albumartist_mbid></albumartist_mbid>
	<art><![CDATA[https://music.com.au/image.php?object_id=15698&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<composer><![CDATA[]]></composer>
	<channels></channels>
	<comment><![CDATA[]]></comment>
	<publisher><![CDATA[Virgin]]></publisher>
	<language></language>
	<replaygain_album_gain>0.000000</replaygain_album_gain>
	<replaygain_album_peak>0.000000</replaygain_album_peak>
	<replaygain_track_gain>-5.940000</replaygain_track_gain>
	<replaygain_track_peak>1.000000</replaygain_track_peak>
	<genre><![CDATA[Alternative Rock]]></genre>
</song>
</root>

```

## playlist_create

* MINIMUM_API_VERSION=380001

This create a new playlist and return it
@param array $input

|Input |Type|Description|Optional|
|------|----|-----------|-------:|
|'name'|    |Playlist name|NO      |
|'type'|    |Playlist type 'public', 'private'|YES     |

```XML
<?xml version="1.0" encoding="UTF-8" ?>
<root>
<total_count>1</total_count>
<playlist id="2070">
	<name><![CDATA[documentation]]></name>
	<owner><![CDATA[user]]></owner>
	<items>0</items>
	<type>private</type>
</playlist>
</root>
```

## playlist_edit

* MINIMUM_API_VERSION=400001
* CHANGED_IN_API_VERSION=400003

This modifies name and type of a playlist
Previously name and type were mandatory while filter wasn't. this has been reversed.
@param array $input

|Input   |Type|Description|Optional|
|--------|----|-----------|-------:|
|'filter'|    |UID of Playlist|NO     |
|'name'|    |Playlist name|YES     |
|'type'|    |Playlist type 'public', 'private'|YES     |

```XML
<?xml version="1.0" encoding="UTF-8" ?>
<root>
	<success code="1"><![CDATA[playlist changes saved]]></success>
</root>
```

## playlist_delete

* MINIMUM_API_VERSION=380001

This deletes a playlist
@param array $input

|Input   |Type|Description|Optional|
|--------|----|-----------|-------:|
|'filter'|    |UID of Playlist|NO      |

```XML
<?xml version="1.0" encoding="UTF-8" ?>
<root>
	<success code="1"><![CDATA[playlist deleted]]></success>
</root>
```

## playlist_add_song

* MINIMUM_API_VERSION=380001
* CHANGED_IN_API_VERSION=400001

This adds a song to a playlist. setting check=1 will not add duplicates to the playlist
@param array $input

|Input   |Type|Description|Optional|
|--------|----|-----------|-------:|
|'filter'|integer|UID of Playlist|NO      |
|'song'  |integer|UID of song to add to playlist|NO      |
|'check' |boolean|0, 1 Whether to check and ignore duplicates (default = 0)|YES     |

```XML
<?xml version="1.0" encoding="UTF-8" ?>
<root>
	<success code="1"><![CDATA[song added to playlist]]></success>
</root>
```

## playlist_remove_song

* MINIMUM_API_VERSION=380001
* CHANGED_IN_API_VERSION=400001

This remove a song from a playlist.
Previous versions required 'track' instead of 'song'.
@param array $input

|Input   |Type|Description|Optional|
|--------|----|-----------|-------:|
|'filter'|    |UID of Playlist|NO      |
|'song'  |    |UID of song to remove from playlist|YES     |
|'track' |    |Track number to remove from playlist|YES     |

```XML
<?xml version="1.0" encoding="UTF-8" ?>
<root>
	<success code="1"><![CDATA[song removed from playlist]]></success>
</root>
```

## playlist_generate

* MINIMUM_API_VERSION=400001
* CHANGED_IN_API_VERSION=400002

Get a list of song XML, indexes or id's based on some simple search criteria
'recent' will search for tracks played after 'Popular Threshold' days
'forgotten' will search for tracks played before 'Popular Threshold' days
'unplayed' added in 400002 for searching unplayed tracks

@param array $input

|Input   |Type   |Description|Optional|
|--------|-------|-----------|-------:|
|'mode'  |string |'recent', 'forgotten', 'unplayed', 'random' (default = 'random')|YES     |
|'filter'|string |string LIKE matched to song title|YES     |
|'album' |integer|$album_id |YES     |
|'artist'|integer|$artist_id |YES     |
|'flag'  |integer|get flagged songs only 0, 1 (default = 0)|YES     |
|'format'|string |'song', 'index','id' (default = 'song')|YES     |
|'offset'|integer|          |YES     |
|'limit' |integer|          |YES     |

SONG
```XML
<?xml version="1.0" encoding="UTF-8" ?>
<root>
<total_count>4</total_count>
<song id="41671">
	<title><![CDATA[Children of Bodom]]></title>
	<name><![CDATA[Children of Bodom]]></name>
	<artist id="1367"><![CDATA[Children of Bodom]]></artist>
	<album id="50293"><![CDATA[Hatebreeder]]></album>
	<tag id="71" count="1" ><![CDATA[Progressive Metal]]></tag>
	<filename><![CDATA[/mnt/music/Children of Bodom/(1999) Hatebreeder/108 - Children of Bodom.mp3]]></filename>
	<track>8</track>
	<time>313</time>
	<year>2000</year>
	<bitrate>160000</bitrate>
	<rate>44100</rate>
	<mode>cbr</mode>
	<mime>audio/mpeg</mime>
	<url><![CDATA[https://music.com.au/play/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=41671&uid=3&player=api&name=Children%20of%20Bodom%20-%20Children%20of%20Bodom.mp3]]></url>
	<size>6283015</size>
	<mbid>891207f9-43aa-40fa-ad90-21d51fbaf045</mbid>
	<album_mbid></album_mbid>
	<artist_mbid></artist_mbid>
	<albumartist_mbid></albumartist_mbid>
	<art><![CDATA[https://music.com.au/image.php?object_id=50293&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<composer><![CDATA[Alexi Laiho]]></composer>
	<channels></channels>
	<comment><![CDATA[]]></comment>
	<publisher><![CDATA[]]></publisher>
	<language></language>
	<replaygain_album_gain>0.000000</replaygain_album_gain>
	<replaygain_album_peak>0.000000</replaygain_album_peak>
	<replaygain_track_gain>-11.140000</replaygain_track_gain>
	<replaygain_track_peak>1.000000</replaygain_track_peak>
	<genre><![CDATA[Progressive Metal]]></genre>
</song>
<song id="816528">
	<title><![CDATA[Moth]]></title>
	<name><![CDATA[Moth]]></name>
	<artist id="11410"><![CDATA[ISLAND]]></artist>
	<album id="63890"><![CDATA[Feels Like Air]]></album>
	<tag id="16" count="1" ><![CDATA[Alternative]]></tag>
	<filename><![CDATA[/mnt/music/ISLAND/(2018) Feels Like Air/107 - Moth.mp3]]></filename>
	<track>7</track>
	<time>221</time>
	<year>2018</year>
	<bitrate>320000</bitrate>
	<rate>44100</rate>
	<mode>cbr</mode>
	<mime>audio/mpeg</mime>
	<url><![CDATA[https://music.com.au/play/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=816528&uid=3&player=api&name=ISLAND%20-%20Moth.mp3]]></url>
	<size>8893546</size>
	<mbid>a1ada68d-a5d6-4131-aecc-14fe72a3aee0</mbid>
	<album_mbid></album_mbid>
	<artist_mbid></artist_mbid>
	<albumartist_mbid></albumartist_mbid>
	<art><![CDATA[https://music.com.au/image.php?object_id=63890&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<composer><![CDATA[]]></composer>
	<channels></channels>
	<comment><![CDATA[]]></comment>
	<publisher><![CDATA[]]></publisher>
	<language></language>
	<replaygain_album_gain>0.000000</replaygain_album_gain>
	<replaygain_album_peak>0.000000</replaygain_album_peak>
	<replaygain_track_gain>-10.350000</replaygain_track_gain>
	<replaygain_track_peak>1.000000</replaygain_track_peak>
	<genre><![CDATA[Alternative]]></genre>
</song>
<song id="68616">
	<title><![CDATA[Let the Music Play]]></title>
	<name><![CDATA[Let the Music Play]]></name>
	<artist id="3758"><![CDATA[Good Charlotte]]></artist>
	<album id="50858"><![CDATA[Cardiology]]></album>
	<tag id="170" count="1" ><![CDATA[Pop Punk]]></tag>
	<filename><![CDATA[/mnt/music/Good Charlotte/(2010) Cardiology [509999 19613 2 7]/102 - Let the Music Play.mp3]]></filename>
	<track>2</track>
	<time>252</time>
	<year>2010</year>
	<bitrate>320000</bitrate>
	<rate>44100</rate>
	<mode>cbr</mode>
	<mime>audio/mpeg</mime>
	<url><![CDATA[https://music.com.au/play/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=68616&uid=3&player=api&name=Good%20Charlotte%20-%20Let%20the%20Music%20Play.mp3]]></url>
	<size>10173140</size>
	<mbid>3c00f247-9202-4079-b55a-fc445c0f3c63</mbid>
	<album_mbid></album_mbid>
	<artist_mbid></artist_mbid>
	<albumartist_mbid></albumartist_mbid>
	<art><![CDATA[https://music.com.au/image.php?object_id=50858&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<composer><![CDATA[]]></composer>
	<channels></channels>
	<comment><![CDATA[]]></comment>
	<publisher><![CDATA[Capitol Records]]></publisher>
	<language></language>
	<replaygain_album_gain>0.000000</replaygain_album_gain>
	<replaygain_album_peak>0.000000</replaygain_album_peak>
	<replaygain_track_gain>-11.550000</replaygain_track_gain>
	<replaygain_track_peak>1.000000</replaygain_track_peak>
	<genre><![CDATA[Pop Punk]]></genre>
</song>
<song id="770805">
	<title><![CDATA[The Thrash of Naked Limbs]]></title>
	<name><![CDATA[The Thrash of Naked Limbs]]></name>
	<artist id="7314"><![CDATA[My Dying Bride]]></artist>
	<album id="60663"><![CDATA[Trinity]]></album>
	<tag id="45" count="1" ><![CDATA[Gothic]]></tag>
	<tag id="96" count="1" ><![CDATA[Death Metal]]></tag>
	<tag id="162" count="1" ><![CDATA[Doom Metal]]></tag>
	<filename><![CDATA[/mnt/music/My Dying Bride/(1995) Trinity [CDVILED 46]/104 - The Thrash of Naked Limbs.mp3]]></filename>
	<track>4</track>
	<time>370</time>
	<year>2004</year>
	<bitrate>320000</bitrate>
	<rate>44100</rate>
	<mode>cbr</mode>
	<mime>audio/mpeg</mime>
	<url><![CDATA[https://music.com.au/play/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=770805&uid=3&player=api&name=My%20Dying%20Bride%20-%20The%20Thrash%20of%20Naked%20Limbs.mp3]]></url>
	<size>22181388</size>
	<mbid>8f9e0bde-2fc5-4a66-a118-1e7f45d22fb2</mbid>
	<album_mbid></album_mbid>
	<artist_mbid></artist_mbid>
	<albumartist_mbid></albumartist_mbid>
	<art><![CDATA[https://music.com.au/image.php?object_id=60663&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<composer><![CDATA[]]></composer>
	<channels></channels>
	<comment><![CDATA[Remastered 2004]]></comment>
	<publisher><![CDATA[Peaceville]]></publisher>
	<language></language>
	<replaygain_album_gain>0.000000</replaygain_album_gain>
	<replaygain_album_peak>0.000000</replaygain_album_peak>
	<replaygain_track_gain>-8.820000</replaygain_track_gain>
	<replaygain_track_peak>1.000000</replaygain_track_peak>
	<genre><![CDATA[Gothic]]></genre>
	<genre><![CDATA[Death Metal]]></genre>
	<genre><![CDATA[Doom Metal]]></genre>
</song>
</root>

```

INDEX
```XML
<?xml version="1.0" encoding="UTF-8" ?>
<root>
<total_count>4</total_count>
<song id="115880">
	<title><![CDATA[A Man Like Me]]></title>
	<name><![CDATA[A Man Like Me]]></name>
	<artist id="6526"><![CDATA[Styx]]></artist>
	<album id="53180"><![CDATA[Man of Miracles]]></album>
	<tag id="6" count="1" ><![CDATA[Rock]]></tag>
	<filename><![CDATA[/mnt/music/Styx/(1974) Man of Miracles [3115-2-R]/105 - A Man Like Me.mp3]]></filename>
	<track>5</track>
	<time>181</time>
	<year>1990</year>
	<bitrate>320000</bitrate>
	<rate>48000</rate>
	<mode>cbr</mode>
	<mime>audio/mpeg</mime>
	<url><![CDATA[https://music.com.au/play/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=115880&uid=3&player=api&name=Styx%20-%20A%20Man%20Like%20Me.mp3]]></url>
	<size>7244426</size>
	<mbid>1d70fe89-f001-4128-adab-a47fdfe52776</mbid>
	<album_mbid></album_mbid>
	<artist_mbid></artist_mbid>
	<albumartist_mbid></albumartist_mbid>
	<art><![CDATA[https://music.com.au/image.php?object_id=53180&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<composer><![CDATA[]]></composer>
	<channels></channels>
	<comment><![CDATA[]]></comment>
	<publisher><![CDATA[RCA]]></publisher>
	<language></language>
	<replaygain_album_gain>0.000000</replaygain_album_gain>
	<replaygain_album_peak>0.000000</replaygain_album_peak>
	<replaygain_track_gain>-3.730000</replaygain_track_gain>
	<replaygain_track_peak>0.804000</replaygain_track_peak>
	<genre><![CDATA[Rock]]></genre>
</song>
<song id="833792">
	<title><![CDATA[I'm Lost]]></title>
	<name><![CDATA[I'm Lost]]></name>
	<artist id="12654"><![CDATA[Cayne]]></artist>
	<album id="65110"><![CDATA[Old Faded Pictures]]></album>
	<tag id="56" count="1" ><![CDATA[Gothic Rock]]></tag>
	<filename><![CDATA[/mnt/music/Cayne/(2001) Old Faded Pictures/108 - I'm Lost.mp3]]></filename>
	<track>8</track>
	<time>411</time>
	<year>2001</year>
	<bitrate>320000</bitrate>
	<rate>44100</rate>
	<mode>cbr</mode>
	<mime>audio/mpeg</mime>
	<url><![CDATA[https://music.com.au/play/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=833792&uid=3&player=api&name=Cayne%20-%20I-m%20Lost.mp3]]></url>
	<size>16519044</size>
	<mbid>18532e6b-33fa-44ec-af6d-52a0fa0c2838</mbid>
	<album_mbid></album_mbid>
	<artist_mbid></artist_mbid>
	<albumartist_mbid></albumartist_mbid>
	<art><![CDATA[https://music.com.au/image.php?object_id=65110&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<composer><![CDATA[]]></composer>
	<channels></channels>
	<comment><![CDATA[]]></comment>
	<publisher><![CDATA[Scarlet Records]]></publisher>
	<language></language>
	<replaygain_album_gain>0.000000</replaygain_album_gain>
	<replaygain_album_peak>0.000000</replaygain_album_peak>
	<replaygain_track_gain>-10.810000</replaygain_track_gain>
	<replaygain_track_peak>1.000000</replaygain_track_peak>
	<genre><![CDATA[Gothic Rock]]></genre>
</song>
<song id="162228">
	<title><![CDATA[Strom aus Fantasie (EP version)]]></title>
	<name><![CDATA[Strom aus Fantasie (EP version)]]></name>
	<artist id="4003"><![CDATA[Pzychobitch]]></artist>
	<album id="55918"><![CDATA[Strom aus Fantasie]]></album>
	<tag id="4" count="1" ><![CDATA[Electronic]]></tag>
	<tag id="55" count="1" ><![CDATA[Electro]]></tag>
	<tag id="9" count="1" ><![CDATA[Industrial]]></tag>
	<filename><![CDATA[/mnt/music/Pzychobitch/(2006) Strom aus Fantasie [minus 025]/107 - Pzychobitch feat. Dennis Ostermann - Strom aus Fantasie (EP version).mp3]]></filename>
	<track>7</track>
	<time>292</time>
	<year>2006</year>
	<bitrate>320000</bitrate>
	<rate>44100</rate>
	<mode>cbr</mode>
	<mime>audio/mpeg</mime>
	<url><![CDATA[https://music.com.au/play/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=162228&uid=3&player=api&name=Pzychobitch%20-%20Strom%20aus%20Fantasie%20-EP%20version-.mp3]]></url>
	<size>11687227</size>
	<mbid>9ef671c5-17ed-449e-9e22-288f9e593815</mbid>
	<album_mbid></album_mbid>
	<artist_mbid></artist_mbid>
	<albumartist_mbid></albumartist_mbid>
	<art><![CDATA[https://music.com.au/image.php?object_id=55918&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<composer><![CDATA[]]></composer>
	<channels></channels>
	<comment><![CDATA[]]></comment>
	<publisher><![CDATA[Minuswelt Musikfabrik]]></publisher>
	<language></language>
	<replaygain_album_gain>0.000000</replaygain_album_gain>
	<replaygain_album_peak>0.000000</replaygain_album_peak>
	<replaygain_track_gain>-9.780000</replaygain_track_gain>
	<replaygain_track_peak>1.000000</replaygain_track_peak>
	<genre><![CDATA[Electronic]]></genre>
	<genre><![CDATA[Electro]]></genre>
	<genre><![CDATA[Industrial]]></genre>
</song>
<song id="108711">
	<title><![CDATA[Amnesia of the Wildoerian Apocalypse]]></title>
	<name><![CDATA[Amnesia of the Wildoerian Apocalypse]]></name>
	<artist id="1274"><![CDATA[Darkane]]></artist>
	<album id="52898"><![CDATA[Layers of Lies]]></album>
	<tag id="96" count="1" ><![CDATA[Death Metal]]></tag>
	<filename><![CDATA[/mnt/music/Darkane/(2005) Layers of Lies [irond cd 05-1017]/101 - Amnesia of the Wildoerian Apocalypse.mp3]]></filename>
	<track>1</track>
	<time>102</time>
	<year>2005</year>
	<bitrate>214762</bitrate>
	<rate>44100</rate>
	<mode>vbr</mode>
	<mime>audio/mpeg</mime>
	<url><![CDATA[https://music.com.au/play/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=108711&uid=3&player=api&name=Darkane%20-%20Amnesia%20of%20the%20Wildoerian%20Apocalypse.mp3]]></url>
	<size>2747645</size>
	<mbid>de366d48-1591-46cd-a641-8ac5359bae2c</mbid>
	<album_mbid></album_mbid>
	<artist_mbid></artist_mbid>
	<albumartist_mbid></albumartist_mbid>
	<art><![CDATA[https://music.com.au/image.php?object_id=52898&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<composer><![CDATA[]]></composer>
	<channels></channels>
	<comment><![CDATA[]]></comment>
	<publisher><![CDATA[Irond]]></publisher>
	<language></language>
	<replaygain_album_gain>0.000000</replaygain_album_gain>
	<replaygain_album_peak>0.000000</replaygain_album_peak>
	<replaygain_track_gain>-9.410000</replaygain_track_gain>
	<replaygain_track_peak>1.000000</replaygain_track_peak>
	<genre><![CDATA[Death Metal]]></genre>
</song>
</root>

```

ID
```XML
<?xml version="1.0" encoding="UTF-8" ?>
<root>
<total_count>4</total_count>
<song id="824762">
	<title><![CDATA[The Commonwealth Lives]]></title>
	<name><![CDATA[The Commonwealth Lives]]></name>
	<artist id="11142"><![CDATA[Thaurorod]]></artist>
	<album id="64451"><![CDATA[Coast of Gold]]></album>
	<tag id="20" count="1" ><![CDATA[Metal]]></tag>
	<filename><![CDATA[/mnt/music/Thaurorod/(2018) Coast of Gold [DRAK 2339]/102 - The Commonwealth Lives.mp3]]></filename>
	<track>2</track>
	<time>210</time>
	<year>2018</year>
	<bitrate>320000</bitrate>
	<rate>44100</rate>
	<mode>cbr</mode>
	<mime>audio/mpeg</mime>
	<url><![CDATA[https://music.com.au/play/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=824762&uid=3&player=api&name=Thaurorod%20-%20The%20Commonwealth%20Lives.mp3]]></url>
	<size>8693460</size>
	<mbid>644bb1df-de5f-454e-b064-2e707f8a2da0</mbid>
	<album_mbid></album_mbid>
	<artist_mbid></artist_mbid>
	<albumartist_mbid></albumartist_mbid>
	<art><![CDATA[https://music.com.au/image.php?object_id=64451&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<composer><![CDATA[]]></composer>
	<channels></channels>
	<comment><![CDATA[]]></comment>
	<publisher><![CDATA[Drakkar Records]]></publisher>
	<language></language>
	<replaygain_album_gain>0.000000</replaygain_album_gain>
	<replaygain_album_peak>0.000000</replaygain_album_peak>
	<replaygain_track_gain>-11.140000</replaygain_track_gain>
	<replaygain_track_peak>1.000000</replaygain_track_peak>
	<genre><![CDATA[Metal]]></genre>
</song>
<song id="812651">
	<title><![CDATA[Invitation]]></title>
	<name><![CDATA[Invitation]]></name>
	<artist id="9886"><![CDATA[Wear Your Wounds]]></artist>
	<album id="63561"><![CDATA[Dunedevil]]></album>
	<tag id="75" count="1" ><![CDATA[Post-Rock]]></tag>
	<tag id="77" count="1" ><![CDATA[Experimental]]></tag>
	<filename><![CDATA[/mnt/music/Wear Your Wounds/(2017) Dunedevil/101 - Invitation.mp3]]></filename>
	<track>1</track>
	<time>295</time>
	<year>2017</year>
	<bitrate>320028</bitrate>
	<rate>44100</rate>
	<mode>vbr</mode>
	<mime>audio/mpeg</mime>
	<url><![CDATA[https://music.com.au/play/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=812651&uid=3&player=api&name=Wear%20Your%20Wounds%20-%20Invitation.mp3]]></url>
	<size>12294272</size>
	<mbid>ddd5002e-72e1-4633-a433-e21fbffc03cb</mbid>
	<album_mbid></album_mbid>
	<artist_mbid></artist_mbid>
	<albumartist_mbid></albumartist_mbid>
	<art><![CDATA[https://music.com.au/image.php?object_id=63561&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<composer><![CDATA[]]></composer>
	<channels></channels>
	<comment><![CDATA[]]></comment>
	<publisher><![CDATA[Deathwish Inc.]]></publisher>
	<language></language>
	<replaygain_album_gain>0.000000</replaygain_album_gain>
	<replaygain_album_peak>0.000000</replaygain_album_peak>
	<replaygain_track_gain>-7.550000</replaygain_track_gain>
	<replaygain_track_peak>0.944000</replaygain_track_peak>
	<genre><![CDATA[Post-Rock]]></genre>
	<genre><![CDATA[Experimental]]></genre>
</song>
<song id="739585">
	<title><![CDATA[Dextropropoxyphene]]></title>
	<name><![CDATA[Dextropropoxyphene]]></name>
	<artist id="9224"><![CDATA[Methadrone]]></artist>
	<album id="57737"><![CDATA[Erroneous Enlightenment]]></album>
	<tag id="6" count="1" ><![CDATA[Rock]]></tag>
	<tag id="96" count="1" ><![CDATA[Death Metal]]></tag>
	<tag id="162" count="1" ><![CDATA[Doom Metal]]></tag>
	<filename><![CDATA[/mnt/music/Methadrone/(2004) Erroneous Enlightenment [NOTH0008]/106 - Dextropropoxyphene.mp3]]></filename>
	<track>6</track>
	<time>356</time>
	<year>2004</year>
	<bitrate>197839</bitrate>
	<rate>44100</rate>
	<mode>vbr</mode>
	<mime>audio/mpeg</mime>
	<url><![CDATA[https://music.com.au/play/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=739585&uid=3&player=api&name=Methadrone%20-%20Dextropropoxyphene.mp3]]></url>
	<size>8825910</size>
	<mbid>7201ba6c-923b-413c-bd97-3c3109172f43</mbid>
	<album_mbid></album_mbid>
	<artist_mbid></artist_mbid>
	<albumartist_mbid></albumartist_mbid>
	<art><![CDATA[https://music.com.au/image.php?object_id=57737&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<composer><![CDATA[]]></composer>
	<channels></channels>
	<comment><![CDATA[]]></comment>
	<publisher><![CDATA[NOTHingness REcords]]></publisher>
	<language></language>
	<replaygain_album_gain>0.000000</replaygain_album_gain>
	<replaygain_album_peak>0.000000</replaygain_album_peak>
	<replaygain_track_gain>-11.180000</replaygain_track_gain>
	<replaygain_track_peak>1.000000</replaygain_track_peak>
	<genre><![CDATA[Rock]]></genre>
	<genre><![CDATA[Death Metal]]></genre>
	<genre><![CDATA[Doom Metal]]></genre>
</song>
<song id="118215">
	<title><![CDATA[W Balls]]></title>
	<name><![CDATA[W Balls]]></name>
	<artist id="4375"><![CDATA[Snoop Doggy Dogg]]></artist>
	<album id="53352"><![CDATA[Doggystyle]]></album>
	<tag id="1409" count="1" ><![CDATA[Hip Hop]]></tag>
	<filename><![CDATA[/mnt/music/Snoop Dogg/(1993) Doggystyle [7 92279-2; 7 92279-2; 92279-2; 92279-2]/104 - Snoop Dogg - W Balls.mp3]]></filename>
	<track>4</track>
	<time>36</time>
	<year>1993</year>
	<bitrate>320000</bitrate>
	<rate>44100</rate>
	<mode>cbr</mode>
	<mime>audio/mpeg</mime>
	<url><![CDATA[https://music.com.au/play/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=118215&uid=3&player=api&name=Snoop%20Doggy%20Dogg%20-%20W%20Balls.mp3]]></url>
	<size>1681425</size>
	<mbid>511e8bd4-c431-4f08-9965-923117d1bafb</mbid>
	<album_mbid></album_mbid>
	<artist_mbid></artist_mbid>
	<albumartist_mbid></albumartist_mbid>
	<art><![CDATA[https://music.com.au/image.php?object_id=53352&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<composer><![CDATA[]]></composer>
	<channels></channels>
	<comment><![CDATA[]]></comment>
	<publisher><![CDATA[Death Row Records]]></publisher>
	<language></language>
	<replaygain_album_gain>0.000000</replaygain_album_gain>
	<replaygain_album_peak>0.000000</replaygain_album_peak>
	<replaygain_track_gain>-3.710000</replaygain_track_gain>
	<replaygain_track_peak>0.977000</replaygain_track_peak>
	<genre><![CDATA[Hip Hop]]></genre>
</song>
</root>

```
## search_songs

* MINIMUM_API_VERSION=380001

This searches the songs and returns... songs
@param array $input

|Input   |Type|Description|Optional|
|--------|----|-----------|-------:|
|'filter'|    |Value is Alpha Match for Song Title, Artist Name, Album Name, Genre Name returns song XML|NO      |
|'offset'|    |           |YES     |
|'limit' |    |           |YES     |

```XML
<?xml version="1.0" encoding="UTF-8" ?>
<root>
<total_count>4</total_count>
<song id="16808">
        <title><![CDATA[We Gonna Rock]]></title>
        <name><![CDATA[We Gonna Rock]]></name>
        <artist id="605"><![CDATA[The Prodigy]]></artist>
        <album id="49372"><![CDATA[What Evil Lurks]]></album>
        <tag id="4" count="1" ><![CDATA[Electronic]]></tag>
        <filename><![CDATA[/mnt/music/The Prodigy/(1991) What Evil Lurks/102 - We Gonna Rock.mp3]]></filename>
        <track>2</track>
        <time>274</time>
        <year>2004</year>
        <bitrate>192000</bitrate>
        <rate>44100</rate>
        <mode>cbr</mode>
        <mime>audio/mpeg</mime>
        <url><![CDATA[https://music.com.au/play/index.php?ssid=d1683a23636e9d9f2d8490d9cc30ad84&type=song&oid=16808&uid=2&player=api&name=The%20Prodigy%20-%20We%20Gonna%20Rock.mp3]]></url>
        <size>6584750</size>
        <mbid>bee03726-ce83-47cf-81a5-27ae395276f3</mbid>
        <album_mbid></album_mbid>
        <artist_mbid></artist_mbid>
        <albumartist_mbid></albumartist_mbid>
        <art><![CDATA[https://music.com.au/image.php?object_id=49372&object_type=album&auth=d1683a23636e9d9f2d8490d9cc30ad84&name=art.jpg]]></art>
        <flag>0</flag>
        <preciserating>0</preciserating>
        <rating>0</rating>
        <averagerating>0</averagerating>
        <composer><![CDATA[]]></composer>
        <channels></channels>
        <comment><![CDATA[single]]></comment>
        <publisher><![CDATA[]]></publisher>
        <language></language>
        <replaygain_album_gain>0.000000</replaygain_album_gain>
        <replaygain_album_peak>0.000000</replaygain_album_peak>
        <replaygain_track_gain>-9.560000</replaygain_track_gain>
        <replaygain_track_peak>1.000000</replaygain_track_peak>
        <genre><![CDATA[Electronic]]></genre>
</song>
<song id="16810">
        <title><![CDATA[Android]]></title>
        <name><![CDATA[Android]]></name>
        <artist id="605"><![CDATA[The Prodigy]]></artist>
        <album id="49372"><![CDATA[What Evil Lurks]]></album>
        <tag id="4" count="1" ><![CDATA[Electronic]]></tag>
        <filename><![CDATA[/mnt/music/The Prodigy/(1991) What Evil Lurks/103 - Android.mp3]]></filename>
        <track>3</track>
        <time>321</time>
        <year>2004</year>
        <bitrate>192000</bitrate>
        <rate>44100</rate>
        <mode>cbr</mode>
        <mime>audio/mpeg</mime>
        <url><![CDATA[https://music.com.au/play/index.php?ssid=d1683a23636e9d9f2d8490d9cc30ad84&type=song&oid=16810&uid=2&player=api&name=The%20Prodigy%20-%20Android.mp3]]></url>
        <size>7715121</size>
        <mbid>62f5da9d-e3f9-4357-9225-68a08c0d72f4</mbid>
        <album_mbid></album_mbid>
        <artist_mbid></artist_mbid>
        <albumartist_mbid></albumartist_mbid>
        <art><![CDATA[https://music.com.au/image.php?object_id=49372&object_type=album&auth=d1683a23636e9d9f2d8490d9cc30ad84&name=art.jpg]]></art>
        <flag>0</flag>
        <preciserating>0</preciserating>
        <rating>0</rating>
        <averagerating>0</averagerating>
        <composer><![CDATA[]]></composer>
        <channels></channels>
        <comment><![CDATA[single]]></comment>
        <publisher><![CDATA[]]></publisher>
        <language></language>
        <replaygain_album_gain>0.000000</replaygain_album_gain>
        <replaygain_album_peak>0.000000</replaygain_album_peak>
        <replaygain_track_gain>-5.480000</replaygain_track_gain>
        <replaygain_track_peak>1.000000</replaygain_track_peak>
        <genre><![CDATA[Electronic]]></genre>
</song>
<song id="16811">
        <title><![CDATA[What Evil Lurks]]></title>
        <name><![CDATA[What Evil Lurks]]></name>
        <artist id="605"><![CDATA[The Prodigy]]></artist>
        <album id="49372"><![CDATA[What Evil Lurks]]></album>
        <tag id="4" count="1" ><![CDATA[Electronic]]></tag>
        <filename><![CDATA[/mnt/music/The Prodigy/(1991) What Evil Lurks/101 - What Evil Lurks.mp3]]></filename>
        <track>1</track>
        <time>264</time>
        <year>2004</year>
        <bitrate>192000</bitrate>
        <rate>44100</rate>
        <mode>cbr</mode>
        <mime>audio/mpeg</mime>
        <url><![CDATA[https://music.com.au/play/index.php?ssid=d1683a23636e9d9f2d8490d9cc30ad84&type=song&oid=16811&uid=2&player=api&name=The%20Prodigy%20-%20What%20Evil%20Lurks.mp3]]></url>
        <size>6360306</size>
        <mbid>5b585811-07e7-4757-b405-01b5b89b0e2c</mbid>
        <album_mbid></album_mbid>
        <artist_mbid></artist_mbid>
        <albumartist_mbid></albumartist_mbid>
        <art><![CDATA[https://music.com.au/image.php?object_id=49372&object_type=album&auth=d1683a23636e9d9f2d8490d9cc30ad84&name=art.jpg]]></art>
        <flag>1</flag>
        <preciserating>5</preciserating>
        <rating>5</rating>
        <averagerating>0</averagerating>
        <composer><![CDATA[]]></composer>
        <channels></channels>
        <comment><![CDATA[single]]></comment>
        <publisher><![CDATA[]]></publisher>
        <language></language>
        <replaygain_album_gain>0.000000</replaygain_album_gain>
        <replaygain_album_peak>0.000000</replaygain_album_peak>
        <replaygain_track_gain>-9.450000</replaygain_track_gain>
        <replaygain_track_peak>1.000000</replaygain_track_peak>
        <genre><![CDATA[Electronic]]></genre>
</song>
<song id="54608">
        <title><![CDATA[Everybody in the Place]]></title>
        <name><![CDATA[Everybody in the Place]]></name>
        <artist id="605"><![CDATA[The Prodigy]]></artist>
        <album id="49372"><![CDATA[What Evil Lurks]]></album>
        <tag id="4" count="1" ><![CDATA[Electronic]]></tag>
        <filename><![CDATA[/mnt/music/The Prodigy/(1991) What Evil Lurks/104 - Everybody in the Place.mp3]]></filename>
        <track>4</track>
        <time>206</time>
        <year>2004</year>
        <bitrate>220121</bitrate>
        <rate>44100</rate>
        <mode>vbr</mode>
        <mime>audio/mpeg</mime>
        <url><![CDATA[https://music.com.au/play/index.php?ssid=d1683a23636e9d9f2d8490d9cc30ad84&type=song&oid=54608&uid=2&player=api&name=The%20Prodigy%20-%20Everybody%20in%20the%20Place.mp3]]></url>
        <size>5691891</size>
        <mbid>c9b8cc06-6205-4ed4-a7d2-a0f113d8b96d</mbid>
        <album_mbid></album_mbid>
        <artist_mbid></artist_mbid>
        <albumartist_mbid></albumartist_mbid>
        <art><![CDATA[https://music.com.au/image.php?object_id=49372&object_type=album&auth=d1683a23636e9d9f2d8490d9cc30ad84&name=art.jpg]]></art>
        <flag>0</flag>
        <preciserating>0</preciserating>
        <rating>0</rating>
        <averagerating>0</averagerating>
        <composer><![CDATA[The Prodigy]]></composer>
        <channels></channels>
        <comment><![CDATA[single]]></comment>
        <publisher><![CDATA[XL Recordings]]></publisher>
        <language></language>
        <replaygain_album_gain>0.000000</replaygain_album_gain>
        <replaygain_album_peak>0.000000</replaygain_album_peak>
        <replaygain_track_gain>-2.030000</replaygain_track_gain>
        <replaygain_track_peak>0.912000</replaygain_track_peak>
        <genre><![CDATA[Electronic]]></genre>
</song>
</root>
```

## videos

* MINIMUM_API_VERSION=380001

This returns video objects!
@param array $input

|Input   |Type|Description|Optional|
|--------|----|-----------|-------:|
|'filter'|    |Value is Alpha Match for returned results, may be more than one letter/number|NO      |
|'exact' |boolean|if true filter is exact rather then fuzzy|YES     |
|'offset'|    |           |YES     |
|'limit' |    |           |YES     |

```XML
TBC
```

## video

* MINIMUM_API_VERSION=380001

This returns a single video
@param array $input

|Input   |Type|Description|Optional|
|--------|----|-----------|-------:|
|'filter'|    |UID of video, returns video XML|NO      |

```XML
TBC
```

## stats

* MINIMUM_API_VERSION=380001
* CHANGED_IN_API_VERSION=400001

Get some items based on some simple search types and filters.
This method has partial backwards compatibility with older api versions but should be updated to follow the current input values.
(Changed in 400001 `filter` added)
@param array $input

|Input     |Type   |Description                                               |Optional|
|----------|-------|----------------------------------------------------------|-------:|
|'type'    |string |'song', 'album', 'artist'                                 |NO      |
|'filter'  |string |'newest', 'highest', 'frequent', 'recent', 'forgotten', 'flagged', 'random'|NO      |
|'user_id' |integer|                                                          |YES     |
|'username'|string |                                                          |YES     |
|'offset'  |integer|                                                          |YES     |
|'limit'   |integer|                                                          |YES     |

SONG
```XML
TBC
```

ARTIST
```XML
<?xml version="1.0" encoding="UTF-8" ?>
<root>
<total_count>2</total_count>
<artist id="4698">
	<name><![CDATA[Switch]]></name>
	<tag id="665" count="1" ><![CDATA[Club]]></tag>
	<albums>1</albums>
	<songs>1</songs>
	<art><![CDATA[https://music.com.au/image.php?object_id=4698&object_type=artist&auth=eeb9f1b6056246a7d563f479f518bb34]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<mbid>95f7588e-a838-464e-a03a-348ea93503f8</mbid>
	<summary><![CDATA[There are at least nine artists under the name "Switch".

1) Ohio funk band, they began as First Class in 1975. Jermaine Jackson discovered the group that included lead vocalists Phillip Ingram and Bobby DeBarge, with band members Greg Williams, Tommy DeBarge, Eddie Fluellan, and Jody Sims. They had a huge hit in 1978 with "There'll Never Be," a Top Ten R&B single. They also had two others during their tenure on Gordy, "I Call Your Name" in 1979 and "Love Over and Over Again" in 1980. ]]></summary>
	<yearformed>0</yearformed>
	<placeformed><![CDATA[]]></placeformed>
</artist>
<artist id="14836">
	<name><![CDATA[Slate Dump]]></name>
	<tag id="41" count="1" ><![CDATA[Country]]></tag>
	<tag id="70" count="1" ><![CDATA[Folk]]></tag>
	<tag id="144" count="1" ><![CDATA[Dark Folk]]></tag>
	<tag id="1111" count="1" ><![CDATA[Americana]]></tag>
	<tag id="2472" count="1" ><![CDATA[Dark Roots]]></tag>
	<albums>3</albums>
	<songs>3</songs>
	<art><![CDATA[https://music.com.au/image.php?object_id=14836&object_type=artist&auth=eeb9f1b6056246a7d563f479f518bb34]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<mbid>157c79f0-feb1-4c1d-8129-6117541ca83d</mbid>
	<summary><![CDATA[SLATE DUMP a.k.a. Jason "Neff" McQuillen, 
was born at the Appalachian Regional Hospital of Raleigh County, West Virginia in 1977.
His main Influences are singer-songwriters, punks, folkies, & country-bluesmen. ]]></summary>
	<yearformed>0</yearformed>
	<placeformed><![CDATA[]]></placeformed>
</artist>
</root>
```

ALBUM
```XML
<?xml version="1.0" encoding="UTF-8" ?>
<root>
<total_count>2</total_count>
<album id="50688">
	<name><![CDATA[Pod]]></name>
	<artist id="84"><![CDATA[Ween]]></artist>
	<year>1995</year>
	<tracks>23</tracks>
	<disk>1</disk>
	<tag id="6" count="1" ><![CDATA[Rock]]></tag>
	<tag id="417" count="1" ><![CDATA[Lo-Fi]]></tag>
	<art><![CDATA[https://music.com.au/image.php?object_id=50688&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<mbid>07e89afe-6445-3060-ab5a-9dcbc87d1f68</mbid>
</album>
<album id="65184">
	<name><![CDATA[Little Moses/The Star Killers Split EP]]></name>
	<artist id="12694"><![CDATA[Star Killers]]></artist>
	<year>2014</year>
	<tracks>1</tracks>
	<disk>1</disk>
	<art><![CDATA[https://music.com.au/image.php?object_id=65184&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34]]></art>
	<flag>0</flag>
	<preciserating>0</preciserating>
	<rating>0</rating>
	<averagerating>0</averagerating>
	<mbid>4d7df1ca-ec4f-4ac0-a36d-82680df5eb67</mbid>
</album>
</root>
```
## user

* MINIMUM_API_VERSION=380001

This get an user public information
@param array $input

|Input     |Type|Description|Optional|
|----------|----|-----------|-------:|
|'username'|    |Username of the user for who to get details|NO      |

```XML
<?xml version="1.0" encoding="UTF-8" ?>
<root>
<user id="4">
	<username><![CDATA[generic]]></username>
	<auth><![CDATA[d04cdfgb8dfgb6d6dfgdf1676adfgg73]]></auth>
	<email><![CDATA[generic@gemail.email]]></email>
	<access><![CDATA[25]]></access>
	<fullname_public><![CDATA[0]]></fullname_public>
	<validation><![CDATA[]]></validation>
	<disabled><![CDATA[0]]></disabled>
	<create_date><![CDATA[1463308850]]></create_date>
	<last_seen><![CDATA[1575682768]]></last_seen>
	<link><![CDATA[https://music.com.au/stats.php?action=show_user&user_id=4]]></link>
	<website><![CDATA[]]></website>
	<state><![CDATA[]]></state>
	<city><![CDATA[]]></city>
	<fullname><![CDATA[Generic User]]></fullname>
</user>
</root>
```

## user_create

* MINIMUM_API_VERSION=400001

Create a new user. (Requires the username, password and email.)
@param array $input

|Input       |Type   |Description               |Optional|
|------------|-------|--------------------------|-------:|
|'username'  |string |$username                 |NO      |
|'password'  |string |hash('sha256', $password))|NO      |
|'email'     |string |'user@gmail.com'          |NO      |
|'fullname'  |string |                          |YES     |
|'disable'   |boolean|0, 1                      |YES     |

```XML
<?xml version="1.0" encoding="UTF-8" ?>
<root>
	<success code="1"><![CDATA[successfully created: temp_user]]></success>
</root>

```

## user_update

* MINIMUM_API_VERSION=400001

Update an existing user.
@param array $input

|Input       |Type   |Description               |Optional|
|------------|-------|--------------------------|-------:|
|'username'  |string |$username                 |NO      |
|'password'  |string |hash('sha256', $password))|YES     |
|'email'     |string |'user@gmail.com'          |YES     |
|'fullname'  |string |                          |YES     |
|'website'   |string |                          |YES     |
|'state'     |string |                          |YES     |
|'city'      |string |                          |YES     |
|'disable'   |boolean|0, 1                      |YES     |
|'maxbitrate'|string |                          |YES     |

```XML
<?xml version="1.0" encoding="UTF-8" ?>
<root>
	<success code="1"><![CDATA[successfully updated: temp_user]]></success>
</root>

```

## user_delete

* MINIMUM_API_VERSION=400001

Delete an existing user.
@param array $input

|Input     |Type|Description|Optional|
|----------|----|-----------|-------:|
|'username'|string|           |NO      |

```XML
<?xml version="1.0" encoding="UTF-8" ?>
<root>
	<success code="1"><![CDATA[successfully deleted: temp_user]]></success>
</root>

```

## followers

* MINIMUM_API_VERSION=380001

This get an user followers
@param array $input

|Input     |Type|Description|Optional|
|----------|----|-----------|-------:|
|'username'|string|Username of the user for who to get followers list|NO      |

```XML
<?xml version="1.0" encoding="UTF-8" ?>
<root>
<users>
	<username><![CDATA[tdawg]]></username>
</users>
</root>
```

## following

* MINIMUM_API_VERSION=380001

This get the user list followed by an user
@param array $input

|Input     |Type|Description|Optional|
|----------|----|-----------|-------:|
|'username'|string|(Username of the user for who to get following list|NO      |

```XML
<?xml version="1.0" encoding="UTF-8" ?>
<root>
<users>
	<username><![CDATA[tdawg]]></username>
	<username><![CDATA[james]]></username>
	<username><![CDATA[sam]]></username>
	<username><![CDATA[glen]]></username>
	<username><![CDATA[shaun]]></username>
	<username><![CDATA[jake]]></username>
</users>
</root>
```

## toggle_follow

* MINIMUM_API_VERSION=380001

This follow/unfollow an user
@param array $input

|Input     |Type|Description|Optional|
|----------|----|-----------|-------:|
|'username'|string|Username of the user to follow/unfollow|NO      |

```XML
<?xml version="1.0" encoding="UTF-8" ?>
<root>
	<success code="1"><![CDATA[follow toggled for: 4]]></success>
</root>
```

## last_shouts

* MINIMUM_API_VERSION=380001

This get the latest posted shouts
@param array $input

|Input     |Type|Description|Optional|
|----------|----|-----------|-------:|
|'username'|    |Username of the user for who to get latest shouts|YES     |
|'limit'   |    |           |YES     |

```XML
<?xml version="1.0" encoding="UTF-8" ?>
<root>
<shouts>
	<shout id="5">
		<date>1572321464</date>
		<text><![CDATA[good!]]></text>
		<username><![CDATA[myuser]]></username>
	</shout>
	<shout id="4">
		<date>1569416407</date>
		<text><![CDATA[not the right one?]]></text>
		<username><![CDATA[myuser]]></username>
	</shout>
</shouts>
</root>
```

## rate

* MINIMUM_API_VERSION=380001

This rates a library item
@param array $input

|Input   |Type|Description|Optional|
|--------|----|-----------|-------:|
|'type'  |    |library item type, album, artist, song, video|NO      |
|'id'    |    |library item id|NO      |
|'rating'|    |rating between 0-5|NO      |

```XML
TBC
```

## flag

* MINIMUM_API_VERSION=400001

This flags a library item as a favorite

* Setting flag to true (1) will set the flag
* Setting flag to false (0) will remove the flag
@param array $input

|Input |Type   |Description               |Optional|
|------|-------|--------------------------|-------:|
|'type'|string |'song', 'album', 'artist', 'video' |NO      |
|'id'  |integer|$object_id                |NO      |
|'flag'|boolean|0, 1                      |NO      |

```XML
TBC
```

## record_play

* MINIMUM_API_VERSION=400001

Take a song_id and update the object_count and user_activity table with a play. This allows other sources to record play history to ampache
@param array $input

|Input   |Type   |Description|Optional|
|--------|-------|-----------|-------:|
|'id'    |integer|$object_id |NO      |
|'user'  |integer|$user_id   |NO      |
|'client'|string |$agent     |YES     |

```XML
TBC
```

## scrobble

* MINIMUM_API_VERSION=400001

Search for a song using text info and then record a play if found. This allows other sources to record play history to ampache
@param array $input

|Input       |Type   |Description |Optional|
|------------|-------|------------|-------:|
|'song'      |string |$song_name  |NO      |
|'artist'    |string |$artist_name|NO      |
|'album'     |string |$album_name |NO      |
|'songmbid'  |string |$song_mbid  |YES     |
|'artistmbid'|string |$artist_mbid|YES     |
|'albummbid' |string |$album_mbid |YES     |
|'date'      |integer|UNIXTIME()  |YES     |
|'client'    |string |$agent      |YES     |

```XML
<?xml version="1.0" encoding="UTF-8" ?>
<root>
	<success code="1"><![CDATA[successfully scrobbled: 77371]]></success>
</root>
```

## catalog_action

* MINIMUM_API_VERSION=400001

Kick off a catalog update or clean for the selected catalog
@param array $input

|Input    |Type   |Description                      |Optional|
|---------|-------|---------------------------------|-------:|
|'task'   |string |'add_to_catalog', 'clean_catalog'|NO      |
|'catalog'|integer|$catalog_id                      |NO      |

```XML
<?xml version="1.0" encoding="UTF-8" ?>
<root>
	<success code="1"><![CDATA[successfully started: add_to_catalog]]></success>
</root>
```

## timeline

* MINIMUM_API_VERSION=380001

This get an user timeline
@param array $input

|Input     |Type   |Description|Optional|
|----------|-------|-----------|-------:|
|'username'|string |Username of the user for whom to get the timeline|NO      |
|'limit'   |integer|           |YES     |
|'since'   |integer|UNIXTIME() |YES     |

```XML
<?xml version="1.0" encoding="UTF-8" ?>
<root>
<timeline>
	<activity id="32">
		<date>1454189202</date>
		<object_type><![CDATA[song]]></object_type>
		<object_id>1519</object_id>
		<action><![CDATA[play]]></action>
		<username><![CDATA[myusername]]></username>	</activity>
	<activity id="31">
		<date>1454189185</date>
		<object_type><![CDATA[song]]></object_type>
		<object_id>1515</object_id>
		<action><![CDATA[play]]></action>
		<username><![CDATA[myusername]]></username>	</activity>
	<activity id="30">
		<date>1454189154</date>
		<object_type><![CDATA[song]]></object_type>
		<object_id>1515</object_id>
		<action><![CDATA[play]]></action>
		<username><![CDATA[myusername]]></username>	</activity>
</timeline>

</root>
```

## friends_timeline

* MINIMUM_API_VERSION=380001

This get current user friends timeline
@param array $input

|Input  |Type   |Description|Optional|
|-------|-------|-----------|-------:|
|'limit'|integer|           |YES     |
|'since'|integer|UNIXTIME() |NO      |

```XML
<?xml version="1.0" encoding="UTF-8" ?>
<root>
<timeline>
	<activity id="160992">
		<date>1575443631</date>
		<object_type><![CDATA[song]]></object_type>
		<object_id>839448</object_id>
		<action><![CDATA[userflag]]></action>
		<username><![CDATA[glen]]></username>
	</activity>
	<activity id="160991">
		<date>1575423937</date>
		<object_type><![CDATA[song]]></object_type>
		<object_id>839504</object_id>
		<action><![CDATA[userflag]]></action>
		<username><![CDATA[glen]]></username>
	</activity>
	<activity id="160990">
		<date>1575423933</date>
		<object_type><![CDATA[song]]></object_type>
		<object_id>839504</object_id>
		<action><![CDATA[userflag]]></action>
		<username><![CDATA[glen]]></username>
	</activity>
	<activity id="160989">
		<date>1575423760</date>
		<object_type><![CDATA[song]]></object_type>
		<object_id>839448</object_id>
		<action><![CDATA[userflag]]></action>
		<username><![CDATA[glen]]></username>
	</activity>
	<activity id="160988">
		<date>1575423719</date>
		<object_type><![CDATA[song]]></object_type>
		<object_id>839448</object_id>
		<action><![CDATA[userflag]]></action>
		<username><![CDATA[glen]]></username>
	</activity>
	<activity id="160947">
		<date>1575325499</date>
		<object_type><![CDATA[song]]></object_type>
		<object_id>40251</object_id>
		<action><![CDATA[play]]></action>
		<username><![CDATA[tdawg]]></username>
	</activity>
	<activity id="160945">
		<date>1575325287</date>
		<object_type><![CDATA[song]]></object_type>
		<object_id>40257</object_id>
		<action><![CDATA[play]]></action>
		<username><![CDATA[tdawg]]></username>
	</activity>
	<activity id="160943">
		<date>1575324905</date>
		<object_type><![CDATA[song]]></object_type>
		<object_id>68826</object_id>
		<action><![CDATA[play]]></action>
		<username><![CDATA[tdawg]]></username>
	</activity>
	<activity id="160849">
		<date>1575183103</date>
		<object_type><![CDATA[song]]></object_type>
		<object_id>57278</object_id>
		<action><![CDATA[play]]></action>
		<username><![CDATA[family]]></username>
	</activity>
	<activity id="160848">
		<date>1575183050</date>
		<object_type><![CDATA[song]]></object_type>
		<object_id>889923</object_id>
		<action><![CDATA[play]]></action>
		<username><![CDATA[family]]></username>
	</activity>
	<activity id="160846">
		<date>1575105767</date>
		<object_type><![CDATA[song]]></object_type>
		<object_id>79124</object_id>
		<action><![CDATA[play]]></action>
		<username><![CDATA[tdawg]]></username>
    </activity>
	<activity id="160845">
		<date>1575099445</date>
		<object_type><![CDATA[song]]></object_type>
		<object_id>79131</object_id>
		<action><![CDATA[play]]></action>
		<username><![CDATA[tdawg]]></username>
	</activity>
</timeline>
</root>
```

## update_from_tags

* MINIMUM_API_VERSION=400001

Update a single album, artist, song from the tag data
@param array $input

|Input |Type   |Description                    |Optional|
|------|-------|-------------------------------|-------:|
|'type'|string |'artist', 'album', 'song'      |NO      |
|'id'  |integer|$artist_id, $album_id, $song_id|NO      |

```XML
<?xml version="1.0" encoding="UTF-8" ?>
<root>
	<success code="1"><![CDATA[Updated tags for: 54130 (album)]]></success>
</root>
```

## update_artist_info

* MINIMUM_API_VERSION=400001

Update artist information and fetch similar artists from last.fm
Make sure lastfm_API_key is set in your configuration file
@param array $input

|Input    |Type   |Description                |Optional|
|---------|-------|---------------------------|-------:|
|'id'     |integer|$artist_id                 |NO      |

```XML
TBC
```

## update_art

* MINIMUM_API_VERSION=400001

Updates a single album, artist, song running the gather_art process
Doesn't overwrite existing art by default.
@param array $input

|Input      |Type   |Description      |Optional|
|-----------|-------|-----------------|-------:|
|'id'       |integer|$object_id       |NO      |
|'type'     |string |'song', 'podcast'|NO      |
|'overwrite'|boolean|0, 1             |YES     |

```XML
TBC
```

## Binary Data Methods

## stream

* MINIMUM_API_VERSION=400001

Streams a given media file. Takes the file id in parameter with optional max bit rate, file format, time offset, size and estimate content length option.
@param array $input

|Input    |Type   |Description                |Optional|
|---------|-------|---------------------------|-------:|
|'id'     |integer|$object_id                 |NO      |
|'type'   |string |'song', 'podcast'          |NO      |
|'bitrate'|integer|max bitrate for transcoding|YES     |
|'format' |string |'mp3', 'ogg', 'raw', etc   |YES     |
|'offset' |integer|time offset in seconds     |YES     |
|'length' |boolean|0, 1                       |YES     |

## download

* MINIMUM_API_VERSION=400001

Downloads a given media file. set format=raw to download the full file
@param array $input

|Input   |Type   |Description             |Optional|
|--------|-------|------------------------|-------:|
|'id'    |integer|$object_id              |NO      |
|'type'  |string |'song', 'podcast'       |NO      |
|'format'|string |'mp3', 'ogg', 'raw', etc|YES     |

## get_art

* MINIMUM_API_VERSION=400001

Get an art image.
@param array $input

## Control Methods

## localplay

* MINIMUM_API_VERSION=380001

This is for controlling localplay
@param array $input

```XML
TBC
```

## democratic

* MINIMUM_API_VERSION=380001

This is for controlling democratic play
@param array $input

* ACTION
  * method
    * vote
      * oid (Unique ID of the element you want to vote on)
      * type (Type of object, only song is currently accepted so this is optional)
    * devote
      * oid (Unique ID of the element you want to vote on)
      * type (Type of object, only song is currently accepted so this is optional)
    * playlist (Returns an array of song items with an additional \<vote>[VOTE COUNT]\</vote> element)
    * play (Returns the URL for playing democratic play)

|Input   |Type|Description|Optional|
|--------|----|-----------|-------:|
|'oid'   |integer|           |NO      |
|'method'|string|           |NO      |
|'action'|string|           |NO      |

```XML
TBC
```

All XML Documents that have a \<tag> element may have 0 or more tag elements associated with them. Each tag element has an attribute "count" that indicates the number of people who have specified this tag.

Artists XML Document. ID's are Ampache's unique Identifier for the artist.

```XML
<root>
<artist id="12039">
        <name>Metallica</name>
        <albums># of Albums</albums>
        <songs># of Songs</songs>
        <tag id="2481" count="2">Rock & Roll</tag>
        <tag id="2482" count="1">Rock</tag>
        <tag id="2483" count="1">Roll</tag>
        <preciserating>3</preciserating>
        <rating>2.9</rating>
</artist>
<artist id="129348">
        <name>AC/DC</name>
        <albums># of Albums</albums>
        <songs># of Songs</songs>
        <tag id="2481" count="2">Rock & Roll</tag>
        <tag id="2482" count="2">Rock</tag>
        <tag id="2483" count="1">Roll</tag>
        <preciserating>3</preciserating>
        <rating>2.9</rating>
</artist>
</root>
```

Album XML Document. ID's are Ampache's unique identifier for the album and artist associated.

```XML
<root>
<album id="2910">
        <name>Back in Black</name>
        <artist id="129348">AC/DC</artist>
        <year>1984</year>
        <tracks>12</tracks>
        <disk>1</disk>
        <tag id="2481" count="2">Rock & Roll</tag>
        <tag id="2482" count="1">Rock</tag>
        <tag id="2483" count="1">Roll</tag>
        <art>http://localhost/image.php?id=129348</art>
        <preciserating>3</preciserating>
        <rating>2.9</rating>
</album>
</root>
```

Single Song XML document, includes references to its parent objects.

```XML
<root>
<song id="3180">
        <title>Hells Bells</title>
        <artist id="129348">AC/DC</artist>
        <album id="2910">Back in Black</album>
        <tag id="2481" count="3">Rock & Roll</tag>
        <tag id="2482" count="1">Rock</tag>
        <tag id="2483" count="1">Roll</tag>
        <track>4</track>
        <time>234</time>
        <url>http://localhost/play/index.php?oid=123908...</url>
        <size>Song Filesize in Bytes</size>
        <art>http://localhost/image.php?id=129348</art>
        <preciserating>3</preciserating>
        <rating>2.9</rating>
</song>
</root>
```

Tag XML Document, includes counts for it's child objects

```XML
<root>
<tag id="2481">
        <name>Rock & Roll</name>
        <albums>84</albums>
        <artists>29</artists>
        <songs>239</songs>
        <video>13</video>
        <playlist>2</playlist>
        <stream>6</stream>
</tag>
</root>
```

Playlist XML Document, includes counts for it's child objects

```XML
<root>
<playlist id="1234">
        <name>The Good Stuff</name>
        <owner>Karl Vollmer</owner>
        <items>50</items>
        <tag id="2481" count="2">Rock & Roll</tag>
        <tag id="2482" count="2">Rock</tag>
        <tag id="2483" count="1">Roll</tag>
        <type>Public</type>
</playlist>
</root>
```

Video XML Document -- Attention UIDs for video elements are non-unique against song.id

```XML
<root>
<video id="1234">
          <title>Futurama Bender's Big Score</title>
          <mime>video/avi</mime>
          <resolution>720x288</resolution>
          <size>Video Filesize in Bytes</size>
          <tag id="12131" count="3">Futurama</tag>
          <tag id="32411" count="1">Movie</tag>
          <url>http://localhost/play/index.php?oid=123908...</url>
</video>
</root>
```