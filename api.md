# The Ampache API

## General Info

**Compatible Versions:** _>= 350001_
Ampache Provides an API for pulling out it's meta data in the form of simple XML documents. This was originally created for use by [Amarok](http://amarok.kde.org/), but there is no reason it couldn't be used to create other front-ends to the Ampache data.

Access to the API is controlled by the Internal [Access Control Lists](ACL). The KEY defined in the ACL is the passphrase that must be used to establish an API session. By default requests are limited to a maximum of 5000 results for performance reasons. To get additional results pass offset as an additional parameter.
If you have any questions or requests for this API please submit a [Feature Request](https://github.com/ampache/ampache/issues?state=closed). All dates in the API calls should be passed as [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) dates.

## Current Version

* Master 400003
* Develop 400004

## Handshake Requests

Multiple authentication methods are available, described in the next sections.
It's important to remember that the handshake method is the only time you will send these strings.
After authentication you will be given a [session id](#the-ampache-api-handshake-requests-result) to use for all further connections.

### User / Password

The handshake is a combination of the following three things

* Encoded Passphrase
* Timestamp
* Username

The key that must be passed to Ampache is `SHA256(TIME+KEY)` where `KEY` is `SHA256('PASSWORD')`. Below is a PHP example

```PHP
$time = time();
$key = hash('sha256','mypassword');
$passphrase = hash('sha256',$time . $key);
```

Once you've generated the encoded passphrase, you can call the following URL (localhost/ampache is the location of your Ampache installation)

```Text
http://ampache.local/server/xml.server.php?action=handshake&auth=PASSPHRASE&timestamp=TIME&version=350001&user=USER
```

### Api Key

The key that must be passed to Ampache is the API Key generated for a specific user (none by default, only the administrator can generate one). Then call the following URL (localhost/ampache is the location of your Ampache installation):

```Text
http://ampache.local/server/xml.server.php?action=handshake&auth=APIKEY&version=400001
```

In API 400001 onwards the key that must be passed to Ampache is `SHA256(USER+KEY)` where `KEY` is `SHA256('APIKEY')`. Below is a PHP example

```PHP
$user = 'username';
$key = hash('sha256', 'myapikey');
$passphrase = hash('sha256', $user . $key);
```

### Ampache scheme

To standardize how to transfer Ampache connection information, the following Ampache scheme is defined.

```Text
ampache://authentication@hostname[:port]/subdirectory[#parameters]
```

for example:
```Text
ampache://myuser:mypwd@localhost/ampache
```
```Text
ampache://yourapikey@localhost:993/ampache#ssl=true
```

### Application Name

By default Ampache uses USER_AGENT as application name but this could also be defined through http query string. Add `&client=YourAppName` to override the application name. This parameter also works on stream sessions.

### Geolocation

* Latitude
* Longitude
* Place name

Optionally, you can also provide geolocation information `&geo_latitude=$latitude&geo_longitude=$longitude`, with an optional place name if you already know coordinates match `&geo_name=$placename`.

### Result

If your authenticated User and IP match a row in the Access List the following will be returned.

```XML
<?xml version="1.0" encoding="UTF-8" ?>
<root>
    <auth><%AUTHENTICATION TOKEN%></auth>
    <api><%APIVERSION%></api>
    <session_expire><![CDATA[2019-12-03T09:36:46+10:00]]></session_expire>
    <update><![CDATA[2019-11-26T16:35:05+10:00]]></update>
    <add><![CDATA[2019-12-03T06:42:55+10:00]]></add>
    <clean><![CDATA[2019-12-03T06:41:02+10:00]]></clean>
    <songs><![CDATA[268302]]></songs>
    <albums><![CDATA[25686]]></albums>
    <artists><![CDATA[11055]]></artists>
    <playlists><![CDATA[20]]></playlists>
    <videos><![CDATA[0]]></videos>
    <catalogs><![CDATA[4]]></catalogs>
</root>
```

```JSON
{
    "auth": "%AUTHENTICATION TOKEN%",
    "api": "%APIVERSION%",
    "session_expire": "2020-01-15T17:00:25+10:00",
    "update": "2019-11-26T16:35:05+10:00",
    "add": "2020-01-15T04:42:15+10:00",
    "clean": "2020-01-15T04:40:30+10:00",
    "songs": "271744",
    "albums": "26011",
    "artists": "11193",
    "playlists": 26,
    "videos": "0",
    "catalogs": "4"
}
```

All future interactions with the Ampache API must include the `AUTHENTICATION_TOKEN` as a `GET` variable named `auth`.

## Errors

All errors will be returned as an XML document as specified in the [API Error Document](#xml-api-errors). When possible the text part of the message will be translated into the users configured language.

## Class Methods

All methods must be passed as `action=METHODNAME`. All methods except the `handshake` can take an optional `offset=XXX` and `limit=XXX`. The limit determines the maximum number of results returned. The offset will tell Ampache where to start in the result set. For example if there are 100 total results and you set the offset to 50, and the limit to 50 Ampache will return results between 50 and 100. The default limit is 5000. The default offset is 0.

You can also pass it `limit=none` to overcome the `limit` limitation and return **all** the matching elements.

Refer to the [XML-methods](#api-class) page for further information regarding  each method

### Non-Data API Methods

* [handshake](#api-class-non-data-method-documentation-handshake)
* [ping](#api-class-non-data-method-documentation-ping)
* [goodbye](#api-class-non-data-method-documentation-goodbye) (MINIMUM V400001)
* [url_to_song](#api-class-non-data-method-documentation-url_to_song)
* [check_parameter](#api-class-non-data-method-documentation-check_parameter) (MINIMUM V400001)

### Data API Methods

* [get_indexes](#api-class-data-method-documentation-get_indexes) (MINIMUM V400001)
* [artist](#api-class-data-method-documentation-artists)
* [artist](#api-class-data-method-documentation-artist)
* [artist_songs](#api-class-data-method-documentation-artist_songs)
* [artist_albums](#api-class-data-method-documentation-artist_albums)
* [albums](#api-class-data-method-documentation-albums)
* [album](#api-class-data-method-documentation-album)
* [album_songs](#api-class-data-method-documentation-album_songs)
* [tags](#api-class-data-method-documentation-tags)
* [tag](#api-class-data-method-documentation-tag)
* [tag_artists](#api-class-data-method-documentation-tag_artists)
* [tag_albums](#api-class-data-method-documentation-tag_albums)
* [tag_songs](#api-class-data-method-documentation-tag_songs)
* [songs](#api-class-data-method-documentation-songs)
* [song](#api-class-data-method-documentation-song)
* [advanced_search](#api-class-data-method-documentation-advanced_search) (CHANGED V400001)
* [stats](#api-class-data-method-documentation-stats) (CHANGED V400001 `filter` added)
* [playlists](#api-class-data-method-documentation-playlists)
* [playlist](#api-class-data-method-documentation-playlist)
* [playlist_songs](#api-class-data-method-documentation-playlist_songs)
* [playlist_create](#api-class-data-method-documentation-playlist_create)
* [playlist_edit](#api-class-data-method-documentation-playlist_edit) (MINIMUM V400001)
* [playlist_delete](#api-class-data-method-documentation-playlist_delete)
* [playlist_add_song](#api-class-data-method-documentation-playlist_add_song) (CHANGED V400001)
* [playlist_remove_song](#api-class-data-method-documentation-playlist_remove_song) (CHANGED V400001)
* [playlist_generate](#api-class-data-method-documentation-playlist_generate) (MINIMUM V400001)
* [search_songs](#api-class-data-method-documentation-search_songs)
* [videos](#api-class-data-method-documentation-videos)
* [video](#api-class-data-method-documentation-video)
* [user](#api-class-data-method-documentation-user)
* [user_create](#api-class-data-method-documentation-user_create) (MINIMUM V400001)
* [user_update](#api-class-data-method-documentation-user_update) (MINIMUM V400001)
* [user_delete](#api-class-data-method-documentation-user_delete) (MINIMUM V400001)
* [rate](#api-class-data-method-documentation-rate)
* [flag](#api-class-data-method-documentation-flag) (MINIMUM V400001)
* [record_play](#api-class-data-method-documentation-record_play) (MINIMUM V400001)
* [scrobble](#api-class-data-method-documentation-scrobble) (MINIMUM V400001)
* [followers](#api-class-data-method-documentation-followers)
* [following](#api-class-data-method-documentation-following)
* [toggle_follow](#api-class-data-method-documentation-toggle_follow)
* [last_shouts](#api-class-data-method-documentation-last_shouts)
* [timeline](#api-class-data-method-documentation-timeline)
* [friends_timeline](#api-class-data-method-documentation-friends_timeline)
* [catalog_action](#api-class-data-method-documentation-catalog_action) (MINIMUM V400001)
* [update_from_tags](#api-class-data-method-documentation-update_from_tags) (MINIMUM V400001)
* [update_artist_info](#api-class-data-method-documentation-update_artist_info) (MINIMUM V400001)
* [update_art](#api-class-data-method-documentation-update_art) (MINIMUM V400001)

### Binary Data API Methods

* [stream](#api-class-binary-data-method-documentation-stream) (MINIMUM V400001)
* [download](#api-class-binary-data-method-documentation-download) (MINIMUM V400001)
* [get_art](#api-class-binary-data-method-documentation-get_art) (MINIMUM V400001)

### Control API Methods

* [localplay](#api-class-control-method-documentation-localplay)
* [democratic](#api-class-control-method-documentation-democratic)

# API Class

## Non-Data Methods

### handshake

* MINIMUM V380001

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
    <auth><![CDATA[AUTHTOKEN]]></auth>
    <api><![CDATA[400002]]></api>
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

### ping

* MINIMUM V380001

This can be called without being authenticated, it is useful for determining if what the status of the server is, and what version it is running/compatible with
@param array $input

|Input |Type  |Description|Optional|
|------|------|-----------|-------:|
|'auth'|string|(Session ID) destroys the session if it exists|YES      |

```XML
<?xml version="1.0" encoding="UTF-8" ?>
<root>
    <session_expire><![CDATA[2019-12-05T10:26:43+10:00]]></session_expire>
    <server><![CDATA[4.1.0-develop]]></server>
    <version><![CDATA[400002]]></version>
    <compatible><![CDATA[350001]]></compatible>
</root>
```

### goodbye

* MINIMUM V400001

Destroy a session using the auth parameter.

@param array $input

|Input |Type  |Description|Optional|
|------|------|-----------|-------:|
|'auth'|string|(Session ID) returns version information and extends the session if passed|NO     |

```XML
<?xml version="1.0" encoding="UTF-8" ?>
<root>
    <success code="1"><![CDATA[goodbye: fdd9473fec26cf82717639b6828d00d0]]></success>
</root>
```

### url_to_song

* MINIMUM V380001

This takes a url and returns the song object in question
@param array $input

|Input|Type|Description|Optional|
|-----|----|-----------|-------:|
|'url'|string|Full Ampache URL from server, translates back into a song Object|NO      |

### set_filter

* MINIMUM V380001

This is a play on the browse function, it's different as we expose the filters in a slightly different and vastly simpler way to the end users--so we have to do a little extra work to make them work internally.

@param string $filter
@param integer|string|boolean|null $value
@return boolean

|Input   |Type                      |Description|Optional|
|--------|--------------------------|-----------|-------:|
|'filter'|string                    |           |NO      |
|'value' |int, string, boolean, null|           |NO      |

### check_parameter

* MINIMUM V400001

This function checks the $input actually has the parameter. Parameters must be an array of required elements as a string

@param array $input
@param string[] $parameters
@return boolean

|Input   |Type    |Description|Optional|
|--------|--------|-----------|-------:|
|'input' |array   |input from the API           |NO      |
|'parameters' |string[]|array of parameters to check           |NO      |

## Data Methods

### get_indexes

* MINIMUM V400001

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

```XML
<?xml version="1.0" encoding="UTF-8" ?>
<root>
<total_count>11193</total_count>
<artist id="13429">
    <name><![CDATA[!!!]]></name>
        <album id="67123"><![CDATA[Softcore Jukebox]]></album>
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
<artist id="15784">
    <name><![CDATA[#366: A life lived]]></name>
        <album id="70378"><![CDATA[Face the Beat: Session 2]]></album>
</artist>
</root>
```

### advanced_search

* MINIMUM V380001
* CHANGED V400001

#### Changes to text searches

* 'is not' has been added shifting values down the list.
  0=contains, 1=does not contain, 2=starts with, 3=ends with
  4=is, 5=is not, 6=sounds like, 7=does not sound like
* rule_1['name'] is depreciated. Instead of rule_1['name'] use rule_1['title'] (I have put a temp workaround into the search rules to alleviate this change for any existing apps)

#### Using advanced_search

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
|smartplaylist |Smart Playlist       |boolean_subsearch|song                 |Song is in a particular Smart Playlist|
|metadata      |Metadata             |multiple         |song                 |#TODO                                 |

Select your operator (integer only!) based on the type or your selected search

|rule_1_operator|Text / Tags                    |Numeric / user_numeric                       |Date     |Boolean, Numeric, Subsearch / Days|
|:-------------:|-------------------------------|---------------------------------------------|---------|----------------------------------|
|0              |contains                       |is greater than or equal to / has loved      |before   |is true / before (x) days ago     |
|1              |does not contain               |is less than or equal to / has rated 5 stars |after    |is false / after (x) days ago     |
|2              |starts with                    |is / has rated 4 stars                       |         |                                  |
|3              |ends with                      |is not / has rated 3 stars                   |         |                                  |
|4              |is                             |is greater than / has rated 2 stars          |         |                                  |
|5              |is not                         |is less than / has rated 1 stars             |         |                                  |
|6              |sounds like (Text Only)        |                                             |         |                                  |
|7              |does not sound like (Text Only)|                                             |         |-                                  |

Send the correct input based on the type of search.

|rule_1_input|
|------------|
|text        |
|integer     |
|boolean     |

@param array $input

|Input     |Type   |Description|Optional|
|----------|-------|-----------|-------:|
|'operator'|string |'and','or' (whether to match one rule or all)|NO |
|'rules'   |array  |[[rule_1,rule_1_operator,rule_1_input], [rule_2,rule_2_operator,rule_2_input], [etc]]|NO |
|'type'    |string |'song', 'album', 'artist', 'playlist', 'label', 'user', 'video'|NO |
|'offset'  |integer| |YES|
|'limit'   |integer| |YES|

### artists

* MINIMUM V380001

This takes a collection of inputs and returns artist objects. This function is deprecated! (Why it's depreciated i don't know)
@param array $input

|Input    |Type|Description|Optional|
|---------|----|-----------|-------:|
|'filter' |    |Value is Alpha Match for returned results, may be more than one letter/number|YES     |
|'exact'  |boolean|if true filter is exact rather then fuzzy|YES     |
|'add'    |set_filter|ISO 8601 Date Format assumed filter method is newer then specified date, however [START]/[END] can be specified to receive only results added between two dates|YES     |
|'update' |set_filter|ISO 8601 Date Format assumed filter method is newer then specified date, however [START]/[END] can be specified to receive only results updated between two dates|YES     |
|'offset' |    |           |YES     |
|'limit'  |    |           |YES     |
|'include'|array|Array specified using GET convention, can contain `albums` or `songs` and will include the corresponding XML nested in the artist Object|NO      |

```XML
<?xml version="1.0" encoding="UTF-8" ?>
<root>
<total_count>11069</total_count>
<artist id="13429">
    <name><![CDATA[!!!]]></name>
    <tag id="55" count="1" ><![CDATA[Electro]]></tag>
    <albums>1</albums>
    <songs>1</songs>
    <art><![CDATA[http://ampache.local/image.php?object_id=13429&object_type=artist&auth=AUTHTOKEN]]></art>
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

### artist

* MINIMUM V380001

This returns a single artist based on the UID of said artist
@param array $input

|Input    |Type|Description|Optional|
|---------|----|-----------|-------:|
|'filter' |    |UID of Artist, returns artist Object|NO      |
|'include'|array|Array specified using GET convention, can contain `albums` or `songs` and will include the corresponding XML nested in the artist Object|NO      |

```XML
<?xml version="1.0" encoding="UTF-8" ?>
<root>
<total_count>1</total_count>
<artist id="13429">
    <name><![CDATA[!!!]]></name>
    <tag id="55" count="1" ><![CDATA[Electro]]></tag>
    <albums>1</albums>
    <songs>1</songs>
    <art><![CDATA[http://ampache.local/image.php?object_id=13429&object_type=artist&auth=AUTHTOKEN]]></art>
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

### artist_albums

* MINIMUM V380001

This returns the albums of an artist
@param array $input

|Input   |Type|Description|Optional|
|--------|----|-----------|-------:|
|'filter'|    |UID of Artist, returns Album Object|NO      |
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
    <art><![CDATA[http://ampache.local/image.php?object_id=67123&object_type=album&auth=AUTHTOKEN]]></art>
    <flag>0</flag>
    <preciserating>0</preciserating>
    <rating>0</rating>
    <averagerating>0</averagerating>
    <mbid>b6cbb7a5-a0c2-47f8-93a2-7157874249eb</mbid>
</album>
</root>
```
### artist_songs

* MINIMUM V380001

This returns the songs of the specified artist
@param array $input

|Input   |Type|Description|Optional|
|--------|----|-----------|-------:|
|'filter'|    |UID of Artist, returns Song Object|NO      |
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
    <url><![CDATA[http://ampache.local/play/index.php?ssid=AUTHTOKEN&type=song&oid=857257&uid=2&player=api&name=-%20-%20Feel%20Good%20Hit%20of%20the%20Fall.flac]]></url>
    <size>38262252</size>
    <mbid>388170b3-ae1d-4adb-b116-4e046e0f60e8</mbid>
    <album_mbid></album_mbid>
    <artist_mbid></artist_mbid>
    <albumartist_mbid></albumartist_mbid>
    <art><![CDATA[http://ampache.local/image.php?object_id=67123&object_type=album&auth=AUTHTOKEN&name=art.jpg]]></art>
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

### albums

* MINIMUM V380001

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
|'include'|array|Array specified using GET convention, can contain `songs` and will include the corresponding XML nested in the album Object|YES     |

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
    <art><![CDATA[http://ampache.local/image.php?object_id=67512&object_type=album&auth=263297b0a7ee3000a0feebd05bc0a651]]></art>
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
    <art><![CDATA[http://ampache.local/image.php?object_id=63824&object_type=album&auth=263297b0a7ee3000a0feebd05bc0a651]]></art>
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
    <art><![CDATA[http://ampache.local/image.php?object_id=44142&object_type=album&auth=263297b0a7ee3000a0feebd05bc0a651]]></art>
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
    <art><![CDATA[http://ampache.local/image.php?object_id=65269&object_type=album&auth=263297b0a7ee3000a0feebd05bc0a651]]></art>
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
    <art><![CDATA[http://ampache.local/image.php?object_id=54185&object_type=album&auth=263297b0a7ee3000a0feebd05bc0a651]]></art>
    <flag>1</flag>
    <preciserating>5</preciserating>
    <rating>5</rating>
    <averagerating>0</averagerating>
    <mbid>dfc85b85-d12e-4950-9378-a3c1e67833d9</mbid>
</album>
</root>
```

### album

* MINIMUM V380001

This returns a single album based on the UID provided
@param array $input

|Input    |Type|Description|Optional|
|---------|----|-----------|-------:|
|'filter' |    |UID of Album, returns album Object|NO      |
|'include'|array|Array specified using GET convention, can contain `songs` and will include the corresponding XML nested in the album Object|NO      |

### album_songs

* MINIMUM V380001

This returns the songs of a specified album
@param array $input

|Input   |Type|Description|Optional|
|--------|----|-----------|-------:|
|'filter'|    |UID of Album, returns song Object|NO      |
|'offset'|    |           |YES     |
|'limit' |    |           |YES     |

### tags

* MINIMUM V380001

This returns the tags (Genres) based on the specified filter
@param array $input

|Input   |Type|Description|Optional|
|--------|----|-----------|-------:|
|'filter'|    |Value is Alpha Match for returned results, may be more than one letter/number|YES     |
|'exact' |boolean|if true filter is exact rather then fuzzy|NO      |
|'offset'|    |           |YES     |
|'limit' |    |           |YES     |

### tag

* MINIMUM V380001

This returns a single tag based on UID
@param array $input

|Input   |Type|Description|Optional|
|--------|----|-----------|-------:|
|'filter'|    |UID of tag, returns tag Object|NO      |

### tag_artists

* MINIMUM V380001

This returns the artists associated with the tag in question as defined by the UID
@param array $input

|Input   |Type|Description|Optional|
|--------|----|-----------|-------:|
|'filter'|    |UID of tag, returns artist Object|NO      |
|'offset'|    |           |YES     |
|'limit' |    |           |YES     |

### tag_albums

* MINIMUM V380001

This returns the albums associated with the tag in question
@param array $input

|Input   |Type|Description|Optional|
|--------|----|-----------|-------:|
|'filter'|    |UID of tag, returns album Object|NO      |
|'offset'|    |           |YES     |
|'limit' |    |           |YES     |

### tag_songs

* MINIMUM V380001

returns the songs for this tag
@param array $input

|Input   |Type|Description|Optional|
|--------|----|-----------|-------:|
|'filter'|    |UID of tag, returns song Object|NO      |
|'offset'|    |           |YES     |
|'limit' |    |           |YES     |

### songs

* MINIMUM V380001

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

### song

* MINIMUM V380001

returns a single song
@param array $input

|Input   |Type|Description|Optional|
|--------|----|-----------|-------:|
|'filter'|    |UID of Song, returns song Object|NO      |

### playlists

* MINIMUM V380001

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

### playlist

* MINIMUM V380001

This returns a single playlist
@param array $input

|Input   |Type|Description|Optional|
|--------|----|-----------|-------:|
|'filter'|    |UID of playlist, returns playlist Object|NO      |

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

### playlist_songs

* MINIMUM V380001

This returns the songs for a playlist
@param array $input

|Input   |Type|Description|Optional|
|--------|----|-----------|-------:|
|'filter'|    |UID of Playlist, returns song Object|NO      |
|'offset'|    |           |YES     |
|'limit' |    |           |YES     |

### playlist_create

* MINIMUM V380001

This create a new playlist and return it
@param array $input

|Input |Type|Description|Optional|
|------|----|-----------|-------:|
|'name'|    |Playlist name|NO      |
|'type'|    |Playlist type 'public', 'private'|YES     |

### playlist_edit

* MINIMUM V400001
* CHANGED V400003

This modifies name and type of a playlist
Previously name and type were mandatory while filter wasn't. this has been reversed.
@param array $input

|Input   |Type|Description|Optional|
|--------|----|-----------|-------:|
|'filter'|    |UID of Playlist|NO     |
|'name'|    |Playlist name|YES     |
|'type'|    |Playlist type 'public', 'private'|YES     |

### playlist_delete

* MINIMUM V380001

This deletes a playlist
@param array $input

|Input   |Type|Description|Optional|
|--------|----|-----------|-------:|
|'filter'|    |UID of Playlist|NO      |

### playlist_add_song

* MINIMUM V380001
* CHANGED V400001

This adds a song to a playlist. setting check=1 will not add duplicates to the playlist
@param array $input

|Input   |Type|Description|Optional|
|--------|----|-----------|-------:|
|'filter'|integer|UID of Playlist|NO      |
|'song'  |integer|UID of song to add to playlist|NO      |
|'check' |boolean|0, 1 Whether to check and ignore duplicates (default = 0)|YES     |

### playlist_remove_song

* MINIMUM V380001
* CHANGED V400001

This remove a song from a playlist.
Previous versions required 'track' instead of 'song'.
@param array $input

|Input   |Type|Description|Optional|
|--------|----|-----------|-------:|
|'filter'|    |UID of Playlist|NO      |
|'song'  |    |UID of song to remove from playlist|YES     |
|'track' |    |Track number to remove from playlist|YES     |

### playlist_generate

* MINIMUM V400001
* CHANGED V400002

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

### stats

* MINIMUM V380001
* CHANGED V400001

Get some items based on some simple search types and filters.
This method has partial backwards compatibility with older api versions but should be updated to follow the current input values.
(CHANGED V400001 `filter` added)
@param array $input

|Input     |Type   |Description                                               |Optional|
|----------|-------|----------------------------------------------------------|-------:|
|'type'    |string |'song', 'album', 'artist'                                 |NO      |
|'filter'  |string |'newest', 'highest', 'frequent', 'recent', 'forgotten', 'flagged', 'random'|NO      |
|'user_id' |integer|                                                          |YES     |
|'username'|string |                                                          |YES     |
|'offset'  |integer|                                                          |YES     |
|'limit'   |integer|                                                          |YES     |

### search_songs

* MINIMUM V380001

This searches the songs and returns... songs
@param array $input

|Input   |Type|Description|Optional|
|--------|----|-----------|-------:|
|'filter'|    |Value is Alpha Match for Song Title, Artist Name, Album Name, Genre Name returns song Object|NO      |
|'offset'|    |           |YES     |
|'limit' |    |           |YES     |

### videos

* MINIMUM V380001

This returns video objects!
@param array $input

|Input   |Type|Description|Optional|
|--------|----|-----------|-------:|
|'filter'|    |Value is Alpha Match for returned results, may be more than one letter/number|NO      |
|'exact' |boolean|if true filter is exact rather then fuzzy|YES     |
|'offset'|    |           |YES     |
|'limit' |    |           |YES     |

### video

* MINIMUM V380001

This returns a single video
@param array $input

|Input   |Type|Description|Optional|
|--------|----|-----------|-------:|
|'filter'|    |UID of video, returns video Object|NO      |

### user

* MINIMUM V380001

This get an user public information
@param array $input

|Input     |Type|Description|Optional|
|----------|----|-----------|-------:|
|'username'|    |Username of the user for who to get details|NO      |

### user_create

* MINIMUM V400001

Create a new user. (Requires the username, password and email.)
@param array $input

|Input       |Type   |Description               |Optional|
|------------|-------|--------------------------|-------:|
|'username'  |string |$username                 |NO      |
|'password'  |string |hash('sha256', $password))|NO      |
|'email'     |string |'user@gmail.com'          |NO      |
|'fullname'  |string |                          |YES     |
|'disable'   |boolean|0, 1                      |YES     |

### user_update

* MINIMUM V400001

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

### user_delete

* MINIMUM V400001

Delete an existing user.
@param array $input

|Input     |Type|Description|Optional|
|----------|----|-----------|-------:|
|'username'|string|           |NO      |

### rate

* MINIMUM V380001

This rates a library item
@param array $input

|Input   |Type|Description|Optional|
|--------|----|-----------|-------:|
|'type'  |    |library item type, album, artist, song, video|NO      |
|'id'    |    |library item id|NO      |
|'rating'|    |rating between 0-5|NO      |

### flag

* MINIMUM V400001

This flags a library item as a favorite

* Setting flag to true (1) will set the flag
* Setting flag to false (0) will remove the flag
@param array $input

|Input |Type   |Description               |Optional|
|------|-------|--------------------------|-------:|
|'type'|string |'song', 'album', 'artist', 'video' |NO      |
|'id'  |integer|$object_id                |NO      |
|'flag'|boolean|0, 1                      |NO      |

### record_play

* MINIMUM V400001

Take a song_id and update the object_count and user_activity table with a play. This allows other sources to record play history to ampache
@param array $input

|Input   |Type   |Description|Optional|
|--------|-------|-----------|-------:|
|'id'    |integer|$object_id |NO      |
|'user'  |integer|$user_id   |NO      |
|'client'|string |$agent     |YES     |

### scrobble

* MINIMUM V400001

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

### followers

* MINIMUM V380001

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

### following

* MINIMUM V380001

This get the user list followed by an user
@param array $input

|Input     |Type|Description|Optional|
|----------|----|-----------|-------:|
|'username'|string|(Username of the user for who to get following list|NO      |

```XML
<?xml version="1.0" encoding="UTF-8" ?>
<root>
<users>
    <username><![CDATA[]]></username>
</users>
</root>
```

### toggle_follow

* MINIMUM V380001

This follow/unfollow an user
@param array $input

|Input     |Type|Description|Optional|
|----------|----|-----------|-------:|
|'username'|string|Username of the user to follow/unfollow|NO      |

### last_shouts

* MINIMUM V380001

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

### timeline

* MINIMUM V380001

This get an user timeline
@param array $input

|Input     |Type   |Description|Optional|
|----------|-------|-----------|-------:|
|'username'|string |Username of the user for whom to get the timeline|NO      |
|'limit'   |integer|           |YES     |
|'since'   |integer|UNIXTIME() |YES     |

### friends_timeline

* MINIMUM V380001

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

### catalog_action

* MINIMUM V400001

Kick off a catalog update or clean for the selected catalog
@param array $input

|Input    |Type   |Description                      |Optional|
|---------|-------|---------------------------------|-------:|
|'task'   |string |'add_to_catalog', 'clean_catalog'|NO      |
|'catalog'|integer|$catalog_id                      |NO      |

### update_from_tags

* MINIMUM V400001

Update a single album, artist, song from the tag data
@param array $input

|Input |Type   |Description                    |Optional|
|------|-------|-------------------------------|-------:|
|'type'|string |'artist', 'album', 'song'      |NO      |
|'id'  |integer|$artist_id, $album_id, $song_id|NO      |

### update_artist_info

* MINIMUM V400001

Update artist information and fetch similar artists from last.fm
Make sure lastfm_API_key is set in your configuration file
@param array $input

|Input    |Type   |Description                |Optional|
|---------|-------|---------------------------|-------:|
|'id'     |integer|$artist_id                 |NO      |

### update_art

* MINIMUM V400001

Updates a single album, artist, song running the gather_art process
Doesn't overwrite existing art by default.
@param array $input

|Input      |Type   |Description      |Optional|
|-----------|-------|-----------------|-------:|
|'id'       |integer|$object_id       |NO      |
|'type'     |string |'song', 'podcast'|NO      |
|'overwrite'|boolean|0, 1             |YES     |

## Binary Data Methods

### stream

* MINIMUM V400001

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

### download

* MINIMUM V400001

Downloads a given media file. set format=raw to download the full file
@param array $input

|Input   |Type   |Description             |Optional|
|--------|-------|------------------------|-------:|
|'id'    |integer|$object_id              |NO      |
|'type'  |string |'song', 'podcast'       |NO      |
|'format'|string |'mp3', 'ogg', 'raw', etc|YES     |

### get_art

* MINIMUM V400001

Get an art image.
@param array $input

|Input |Type   |Description                                               |Optional|
|------|-------|----------------------------------------------------------|-------:|
|'id'  |integer|$object_id                                                |NO      |
|'type'|string |'song', 'artist', 'album', 'playlist', 'search', 'podcast'|NO      |

## Control Methods

### localplay

* MINIMUM V380001

This is for controlling localplay
@param array $input

|Input    |Type|Description|Optional|
|---------|----|-----------|-------:|
|'command'|string|'next', 'prev', 'stop', 'play'|NO      |

### democratic

* MINIMUM V380001

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

# API Errors

Ampache's XML errors are loosely based around the HTTP status codes. All errors are returned in the form of an XML Document however the string error message provided is translated into the language of the Ampache server in question. All services should only use the code value.

## API Error Codes

All error codes are accompanied by a string value for the error and derived from the [HTTP/1.1 Status Codes](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html)

* **501**
  * This is a fatal error, the Ampache server you have requested does not currently have access control enabled. The API is disabled.

```XML
<root>
      <error code="501">Access Control Not Enabled</error>
</root>
```

```JSON
{
    "error": {
        "code": "501",
        "message": "Access Control Not Enabled"
    }
}
```

* **400**
  * Used when you have specified a valid method but something about the input is incorrect / invalid. See Error message for details, but do not re-attempt the exact same request.

```XML
<?xml version="1.0" encoding="UTF-8" ?>
<root>
    <error code="400"><![CDATA[failed to end session: AUTH_TOKEN]]></error>
</root>
```

```JSON
{
    "error": {
        "code": "400",
        "message": "failed to end session: AUTH_TOKEN"
    }
}
```

* **401**
  * This is a temporary error, this means no valid session was passed or the handshake failed. This should be an indication for services to attempt another handshake

```XML
<?xml version="1.0" encoding="UTF-8" ?>
<root>
    <error code="401"><![CDATA[Missing mandatory parameter 'filter']]></error>
</root>
```

```JSON
{
    "error": {
        "code": "401",
        "message": "Missing mandatory parameter 'filter'"
    }
}
```

* **403**
  * This is a fatal error, the ACL on the Ampache server prevents access from the current source IP Address.

```XML
<?xml version="1.0" encoding="UTF-8" ?>
<root>
    <error code="403"><![CDATA[Unauthorized access attempt to API - ACL Error]]></error>
</root>
```

```JSON
{
    "error": {
        "code": "403",
        "message": "Unauthorised access attempt to API - ACL Error"
    }
}
```

* **405**
  * This is a fatal error, the service requested a method that the API does not implement.

```XML
<?xml version="1.0" encoding="UTF-8" ?>
<root>
    <error code="405"><![CDATA[Invalid Request]]></error>
</root>
```

```JSON
{
    "error": {
        "code": "405",
        "message": "Invalid Request"
    }
}
```

# API Examples

## Request Examples

For the purpose of this example the Ampache host is 'localhost' and the path to Ampache is /ampache

### Requesting all genres whose name starts with Rock

```Text
http://ampache.local/server/xml.server.php?action=tags&auth=APIKEY&filter=Rock
```

### Requesting all song titles, with an offset of 5000

```Text
http://ampache.local/server/xml.server.php?action=songs&auth=APIKEY&offset=5000
```

## XML Examples

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
        <art>http://ampache.local/image.php?id=129348</art>
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
        <url>http://ampache.local/play/index.php?oid=123908...</url>
        <size>Song Filesize in Bytes</size>
        <art>http://ampache.local/image.php?id=129348</art>
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
          <url>http://ampache.local/play/index.php?oid=123908...</url>
</video>
</root>
```

## JSON Examples

