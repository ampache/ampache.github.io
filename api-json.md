# JSON Methods

Lets go through come calls and examples that you can do for each JSON method.

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

```JSON
{
    "auth": "eeb9f1b6056246a7d563f479f518bb34",
    "api": "400004",
    "session_expire": "2020-01-28T13:59:24+10:00",
    "update": "2020-01-24T19:29:35+10:00",
    "add": "2020-01-28T04:49:18+10:00",
    "clean": "2020-01-28T04:47:28+10:00",
    "songs": "274209",
    "albums": "26275",
    "artists": "11275",
    "playlists": 31,
    "videos": "0",
    "catalogs": "4"
}

```

## ping

* MINIMUM_API_VERSION=380001

This can be called without being authenticated, it is useful for determining if what the status of the server is, and what version it is running/compatible with
@param array $input

|Input |Type  |Description|Optional|
|------|------|-----------|-------:|
|'auth'|string|(Session ID) destroys the session if it exists|YES      |

```JSON
{
    "session_expire": "2020-01-28T13:59:26+10:00",
    "server": "4.2.0-develop",
    "version": "400004",
    "compatible": "350001"
}

```

## goodbye

* MINIMUM_API_VERSION=400001

Destroy a session using the auth parameter.

@param array $input

|Input |Type  |Description|Optional|
|------|------|-----------|-------:|
|'auth'|string|(Session ID) returns version information and extends the session if passed|NO     |

```JSON
{
    "success": {
        "message": "goodbye: eeb9f1b6056246a7d563f479f518bb34"
    }
}

```

## url_to_song

* MINIMUM_API_VERSION=380001

This takes a url and returns the song object in question
@param array $input

|Input|Type|Description|Optional|
|-----|----|-----------|-------:|
|'url'|string|Full Ampache URL from server, translates back into a song JSON|NO      |

```JSON
[
    {
        "id": "164215",
        "title": "!",
        "artist": {
            "id": "8526",
            "name": "Hellyeah"
        },
        "album": {
            "id": "56038",
            "name": "Unden!able"
        },
        "filename": "\/mnt\/music\/Hellyeah\/(2016) Unden!able [ESM 171-2]\/101 - !.mp3",
        "track": "1",
        "playlisttrack": "",
        "time": 79,
        "year": "2016",
        "bitrate": "320000",
        "rate": "44100",
        "mode": "cbr",
        "mime": "audio\/mpeg",
        "url": "https:\/\/music.com.au\/play\/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=164215&uid=3&player=api&name=Hellyeah%20-%20-.mp3",
        "size": "3184944",
        "mbid": "42bb2b7a-bf67-4cc4-8610-25399d56474b",
        "album_mbid": null,
        "artist_mbid": null,
        "albumartist_mbid": null,
        "art": "https:\/\/music.com.au\/image.php?object_id=56038&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "composer": "",
        "channels": null,
        "comment": "",
        "publisher": "Eleven Seven Music",
        "language": "",
        "replaygain_album_gain": "0.000000",
        "replaygain_album_peak": "0.000000",
        "replaygain_track_gain": "-6.920000",
        "replaygain_track_peak": "1.000000",
        "tags": [
            "Metal",
            "Hard Rock"
        ]
    }
]

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
```JSON
[
    {
        "id": "953",
        "title": "Wishmaster",
        "artist": {
            "id": "55",
            "name": "Nightwish"
        },
        "album": {
            "id": "48753",
            "name": "Wishmaster"
        },
        "filename": "\/mnt\/music\/Nightwish\/(2000) Wishmaster\/106 - Wishmaster.mp3",
        "track": "6",
        "playlisttrack": "",
        "time": 264,
        "year": "2000",
        "bitrate": "281749",
        "rate": "44100",
        "mode": "vbr",
        "mime": "audio\/mpeg",
        "url": "https:\/\/music.com.au\/play\/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=953&uid=4&player=api&name=Nightwish%20-%20Wishmaster.mp3",
        "size": "9329052",
        "mbid": "d5332837-05a6-475c-8e7a-4a00bc621acc",
        "album_mbid": null,
        "artist_mbid": null,
        "albumartist_mbid": null,
        "art": "https:\/\/music.com.au\/image.php?object_id=48753&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "composer": "Tuomas Holopainen",
        "channels": null,
        "comment": "",
        "publisher": "Drakkar Records; Drakkar Records",
        "language": "",
        "replaygain_album_gain": "0.000000",
        "replaygain_album_peak": "0.000000",
        "replaygain_track_gain": "-10.440000",
        "replaygain_track_peak": "1.000000",
        "encoding": "UTF-8",
        "disk": "1",
        "totaldisks": "1",
        "band": "Nightwish",
        "release_type": "album",
        "barcode": "743217581923",
        "audio_codec": "mp3",
        "recording_time": "2000-05-29",
        "bpm": "64",
        "lyricist": "Tuomas Holopainen",
        "performer_sort_order": "Nightwish",
        "album_artist_sort_order": "Nightwish",
        "original_release_time": "2000-05-02",
        "isrc": "DEC680000387",
        "media_type": "CD",
        "musician_credits_list": "guitar",
        "involved_people_list": "producer",
        "totaltracks": "11",
        "tags": [
            "Rock",
            "Gothic Metal",
            "Heavy Metal",
            "Symphonic Rock",
            "Symphonic Metal"
        ]
    },
    {
        "id": "955",
        "title": "Wanderlust",
        "artist": {
            "id": "55",
            "name": "Nightwish"
        },
        "album": {
            "id": "48753",
            "name": "Wishmaster"
        },
        "filename": "\/mnt\/music\/Nightwish\/(2000) Wishmaster\/104 - Wanderlust.mp3",
        "track": "4",
        "playlisttrack": "",
        "time": 290,
        "year": "2000",
        "bitrate": "265841",
        "rate": "44100",
        "mode": "vbr",
        "mime": "audio\/mpeg",
        "url": "https:\/\/music.com.au\/play\/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=955&uid=4&player=api&name=Nightwish%20-%20Wanderlust.mp3",
        "size": "9680676",
        "mbid": "0584e353-a06f-4c97-a6fb-3ee521e65625",
        "album_mbid": null,
        "artist_mbid": null,
        "albumartist_mbid": null,
        "art": "https:\/\/music.com.au\/image.php?object_id=48753&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "composer": "Tuomas Holopainen",
        "channels": null,
        "comment": "",
        "publisher": "Drakkar Records; Drakkar Records",
        "language": "eng",
        "replaygain_album_gain": "0.000000",
        "replaygain_album_peak": "0.000000",
        "replaygain_track_gain": "-9.490000",
        "replaygain_track_peak": "1.000000",
        "encoding": "UTF-8",
        "disk": "1",
        "totaldisks": "1",
        "band": "Nightwish",
        "release_type": "album",
        "barcode": "743217581923",
        "audio_codec": "mp3",
        "recording_time": "2000-05-29",
        "bpm": "127",
        "lyricist": "Tuomas Holopainen",
        "performer_sort_order": "Nightwish",
        "original_release_time": "2000-05-02",
        "media_type": "CD",
        "album_artist_sort_order": "Nightwish",
        "involved_people_list": "producer",
        "isrc": "DEC680000385",
        "musician_credits_list": "guitar",
        "totaltracks": "11",
        "tags": [
            "Rock",
            "Gothic Metal",
            "Heavy Metal",
            "Symphonic Rock",
            "Symphonic Metal"
        ]
    }
]

```

ARTIST
```JSON
[
    {
        "id": "13429",
        "name": "!!!",
        "tags": "{\n    \"id\": 55,\n    \"count\": 1,\n    \"name\": \"Electro\"\n}",
        "albums": "1",
        "songs": "1",
        "art": "https:\/\/music.com.au\/image.php?object_id=13429&object_type=artist&auth=eeb9f1b6056246a7d563f479f518bb34",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "mbid": "f26c72d3-e52c-467b-b651-679c73d8e1a7",
        "summary": null,
        "yearformed": null,
        "placeformed": null
    },
    {
        "id": "3858",
        "name": "!Bang Elektronika",
        "tags": "{\n    \"id\": 4,\n    \"count\": 1,\n    \"name\": \"Electronic\"\n}",
        "albums": "1",
        "songs": "15",
        "art": "https:\/\/music.com.au\/image.php?object_id=3858&object_type=artist&auth=eeb9f1b6056246a7d563f479f518bb34",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "mbid": "e01b0106-7781-4c80-b7d3-639610a6c5d7",
        "summary": " ",
        "yearformed": "0",
        "placeformed": ""
    },
    {
        "id": "2461",
        "name": "!distain",
        "tags": "{\n    \"id\": 55,\n    \"count\": 1,\n    \"name\": \"Electro\"\n}",
        "albums": "21",
        "songs": "249",
        "art": "https:\/\/music.com.au\/image.php?object_id=2461&object_type=artist&auth=eeb9f1b6056246a7d563f479f518bb34",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "mbid": "c60674c3-1cd8-4b2c-ada3-8f99d94c4aad",
        "summary": "!distain (released as Distain! in the 1990's, by now the exclamation mark goes in the front of the name) is a friendly and unpretentious synth-pop band from Munich, Germany, consisting of singer Alexander Braun and Manfred Thomaser.\n\nHere's a short band biography:\n\n1992\nBand foundation by Alexander Braun, Oliver Faig and Sebastian von Wyschetzki.\n\n1994\nFirst public appearance: \"Pop Albert\" Contest Augsburg; first record deal with Chrom Records.\n\n1995 ",
        "yearformed": "0",
        "placeformed": ""
    },
    {
        "id": "1206",
        "name": "\"Weird Al\" Yankovic",
        "tags": "{\n    \"id\": 830,\n    \"count\": 1,\n    \"name\": \"Novelty\"\n}",
        "albums": "21",
        "songs": "295",
        "art": "https:\/\/music.com.au\/image.php?object_id=1206&object_type=artist&auth=eeb9f1b6056246a7d563f479f518bb34",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "mbid": "7746d775-9550-4360-b8d5-c37bd448ce01",
        "summary": "Alfred Matthew \"Weird Al\" Yankovic (born October 23, 1959 in Downey, California) is an American singer-songwriter, music producer, actor, comedian, satirist, accordion player and kazooist. Yankovic is known in particular for his humorous songs that make light of popular culture and that often parody specific songs by contemporary musical acts. Since his first-aired song parody in 1976, he has sold more than 12 million albums\u2014more than any other comedy act in history\u2014recorded more than 150 parody and original songs ",
        "yearformed": "0",
        "placeformed": ""
    }
]

```

ALBUM
```JSON
[
    {
        "id": "54130",
        "name": "\"...Famous Last Words...\"",
        "artist": {
            "id": "6778",
            "name": "Supertramp"
        },
        "year": "2002",
        "tracks": "9",
        "disk": "1",
        "tags": "[]",
        "art": "https:\/\/music.com.au\/image.php?object_id=54130&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "mbid": "dc0bdca9-ae06-426b-9a43-f23334d0e939"
    },
    {
        "id": "63679",
        "name": "\"Bettin' on a Longshot\" The Singles Collection",
        "artist": {
            "id": "9303",
            "name": "Harrington Saints"
        },
        "year": "2013",
        "tracks": "15",
        "disk": "1",
        "tags": "[]",
        "art": "https:\/\/music.com.au\/image.php?object_id=63679&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "mbid": "71baccde-5011-43b6-b175-30b08c726b06"
    },
    {
        "id": "62167",
        "name": "\"C\" Is for (Please Insert Sophomoric Genitalia Reference HERE)",
        "artist": {
            "id": "474",
            "name": "Puscifer"
        },
        "year": "2010",
        "tracks": "8",
        "disk": "1",
        "tags": "{\n    \"id\": 4,\n    \"count\": 1,\n    \"name\": \"Electronic\"\n}",
        "art": "https:\/\/music.com.au\/image.php?object_id=62167&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "mbid": "46e02dda-058d-4226-a356-76b6bfdd5790"
    },
    {
        "id": "70157",
        "name": "\"Chirping\" Crickets",
        "artist": {
            "id": "15540",
            "name": "Crickets"
        },
        "year": "2004",
        "tracks": "16",
        "disk": "1",
        "tags": "{\n    \"id\": 645,\n    \"count\": 1,\n    \"name\": \"Rockabilly\"\n}",
        "art": "https:\/\/music.com.au\/image.php?object_id=70157&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "mbid": "83df0df3-cd0e-4651-9584-468b6574f5c6"
    }
]

```

PLAYLIST
```JSON
[
    {
        "id": "2069",
        "name": "Hudson",
        "owner": "user",
        "items": "19",
        "type": "public"
    },
    {
        "id": "smart_21",
        "name": "!Played for 5yrs",
        "owner": "public",
        "items": 5000,
        "type": "public"
    },
    {
        "id": "smart_129",
        "name": "3* Artist\/Album",
        "owner": "public",
        "items": 5000,
        "type": "public"
    },
    {
        "id": "smart_2",
        "name": "3*+ catchup tracks",
        "owner": "public",
        "items": "50",
        "type": "public"
    }
]
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
```JSON
[
    {
        "id": "16775",
        "title": "Who U Foolin",
        "artist": {
            "id": "605",
            "name": "The Prodigy"
        },
        "album": {
            "id": "49370",
            "name": "Hotride"
        },
        "filename": "\/mnt\/music\/The Prodigy\/(2004) Hotride\/102 - Who U Foolin.mp3",
        "track": "2",
        "playlisttrack": "",
        "time": 220,
        "year": "2004",
        "bitrate": "202932",
        "rate": "44100",
        "mode": "vbr",
        "mime": "audio\/mpeg",
        "url": "https:\/\/music.com.au\/play\/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=16775&uid=4&player=api&name=The%20Prodigy%20-%20Who%20U%20Foolin.mp3",
        "size": "5594186",
        "mbid": "37131e8a-8e45-4980-8f8f-04ae9658aaa6",
        "album_mbid": null,
        "artist_mbid": null,
        "albumartist_mbid": null,
        "art": "https:\/\/music.com.au\/image.php?object_id=49370&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "composer": "The Prodigy",
        "channels": null,
        "comment": "single",
        "publisher": "XL Recordings",
        "language": "",
        "replaygain_album_gain": "0.000000",
        "replaygain_album_peak": "0.000000",
        "replaygain_track_gain": "-8.660000",
        "replaygain_track_peak": "1.000000",
        "encoding": "UTF-8",
        "disk": "1",
        "totaldisks": "1",
        "band": "The Prodigy",
        "release_type": "single",
        "barcode": "634904120221",
        "audio_codec": "mp3",
        "recording_time": "2004-11-01",
        "bpm": "126",
        "album_artist_sort_order": "Prodigy, The",
        "performer_sort_order": "Prodigy, The",
        "media_type": "CD",
        "original_release_time": "2004-11-01",
        "totaltracks": "4",
        "tags": [
            "Electronic"
        ]
    }
]

```

ARTIST
```JSON
[
    {
        "id": "58",
        "name": "Ratatat",
        "tags": "{\n    \"id\": 4,\n    \"count\": 1,\n    \"name\": \"Electronic\"\n}",
        "albums": "2",
        "songs": "25",
        "art": "https:\/\/music.com.au\/image.php?object_id=58&object_type=artist&auth=eeb9f1b6056246a7d563f479f518bb34",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "mbid": "f467181e-d5e0-4285-b47e-e853dcc89ee7",
        "summary": "Ratatat, from Brooklyn, New York, United States is an electronic music duo: guitarist Mike Stroud and synthesizer driver and producer Evan Mast (E*Vax).\n\nStroud and Mast originally met as students at Skidmore College, but did not work together musically until 2001, when their project was named Cherry (later the name of the final song on their debut album). Written and recorded in the bedroom of Mast's Crown Heights, Brooklyn apartment, the band's debut album Ratatat for XL Recordings was released in 2004. ",
        "yearformed": "0",
        "placeformed": ""
    },
    {
        "id": "145",
        "name": "Nine Inch Nails",
        "tags": "{\n    \"id\": 46,\n    \"count\": 1,\n    \"name\": \"Ambient\"\n}",
        "albums": "23",
        "songs": "195",
        "art": "https:\/\/music.com.au\/image.php?object_id=145&object_type=artist&auth=eeb9f1b6056246a7d563f479f518bb34",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "mbid": "b7ffd2af-418f-4be2-bdd1-22f8b48613da",
        "summary": "\nNine Inch Nails is an Industrial rock band that was formed in 1988 in Cleveland, Ohio, United States by Trent Reznor, the only constant member of the band. Reznor is generally credited for popularizing the genre known as \"industrial rock\" with both his releases and dark, theatrical music videos. As of 2016, the band also officially includes Reznor's longtime collaborator Atticus Ross as a second official member.\n\nBorn Michael Trent Reznor, he was raised by his maternal grandparents in Mercer, Pennsylvania, USA. ",
        "yearformed": "0",
        "placeformed": ""
    },
    {
        "id": "559",
        "name": "Jos\u00e9 Gonz\u00e1lez",
        "tags": "{\n    \"id\": 2367,\n    \"count\": 1,\n    \"name\": \"Folk World & Country\"\n}",
        "albums": "3",
        "songs": "31",
        "art": "https:\/\/music.com.au\/image.php?object_id=559&object_type=artist&auth=eeb9f1b6056246a7d563f479f518bb34",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "mbid": "cd8c5019-5d75-4d5c-bc28-e1e26a7dd5c8",
        "summary": "Jos\u00e9 Gonz\u00e1lez (born 1978 in Gothenburg, Sweden) is a Swedish indie folk singer-songwriter and guitarist (of Argentinian extraction). In 2003, he released his debut album, Veneer, in Europe. The album has since been released in the UK, on April 25, 2005, and in the United States on September 6, 2005. Gonz\u00e1lez is also a member of the Swedish band Junip, along with Elias Araya and Tobias Winterkorn.\n\nThe song Crosses, from Crosses EP and the later Veneer ",
        "yearformed": "0",
        "placeformed": ""
    },
    {
        "id": "704",
        "name": "Robert Rich",
        "tags": "{\n    \"id\": 80,\n    \"count\": 1,\n    \"name\": \"Trance\"\n}",
        "albums": "6",
        "songs": "45",
        "art": "https:\/\/music.com.au\/image.php?object_id=704&object_type=artist&auth=eeb9f1b6056246a7d563f479f518bb34",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "mbid": "93209865-ebeb-4346-96a5-f64305cd0185",
        "summary": "Robert Rich (born August 23, 1963) is an ambient musician and composer based in San Francisco, California, United States.\n\nWith a musical career spanning three decades and over 30 albums, Robert Rich has helped define the genres of ambient music, dark ambient, tribal ambient and trance, yet his music remains hard to categorize. Part of his unique sound comes from using home-made acoustic and electronic instruments, microtonal harmonies, computer-based signal processing, chaotic systems and feedback networks. ",
        "yearformed": "0",
        "placeformed": ""
    }
]

```

ALBUM
```JSON
[
    {
        "id": "57887",
        "name": "(It (Is) It) Critical Band",
        "artist": {
            "id": "9205",
            "name": "90 Day Men \/ GoGoGoAirheart"
        },
        "year": "2000",
        "tracks": "8",
        "disk": "1",
        "tags": "{\n    \"id\": 1415,\n    \"count\": 1,\n    \"name\": \"Post Rock\"\n}",
        "art": "https:\/\/music.com.au\/image.php?object_id=57887&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "mbid": "d6fc36cc-9351-4b53-b7db-7f5b30804800"
    },
    {
        "id": "43867",
        "name": "(It's Not Me) Talking",
        "artist": {
            "id": "1229",
            "name": "Flock of Seagulls"
        },
        "year": "1983",
        "tracks": "4",
        "disk": "1",
        "tags": "[]",
        "art": "https:\/\/music.com.au\/image.php?object_id=43867&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "mbid": null
    },
    {
        "id": "33429",
        "name": "+-",
        "artist": {
            "id": "456",
            "name": "Joy Division"
        },
        "year": "2010",
        "tracks": "19",
        "disk": 9,
        "tags": "{\n    \"id\": 48,\n    \"count\": 1,\n    \"name\": \"New Wave\"\n}",
        "art": "https:\/\/music.com.au\/image.php?object_id=33429&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "mbid": "85bd4a0e-d28a-442c-922e-394b939e7af9"
    },
    {
        "id": "52825",
        "name": "...and Justice for All",
        "artist": {
            "id": "563",
            "name": "Metallica"
        },
        "year": "1988",
        "tracks": "9",
        "disk": "1",
        "tags": "{\n    \"id\": 86,\n    \"count\": 1,\n    \"name\": \"Thrash Metal\"\n}",
        "art": "https:\/\/music.com.au\/image.php?object_id=52825&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "mbid": "cb2704e5-b7a3-343e-918f-aa9cd3489170"
    }
]

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
|'include'|array|Array specified using GET convention, can contain `albums` or `songs` and will include the corresponding JSON nested in the artist JSON|NO      |

```JSON
[
    {
        "id": "13429",
        "name": "!!!",
        "tags": "{\n    \"id\": 55,\n    \"count\": 1,\n    \"name\": \"Electro\"\n}",
        "albums": "1",
        "songs": "1",
        "art": "https:\/\/music.com.au\/image.php?object_id=13429&object_type=artist&auth=eeb9f1b6056246a7d563f479f518bb34",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "mbid": "f26c72d3-e52c-467b-b651-679c73d8e1a7",
        "summary": "!!! is an American dance-punk band from  Sacramento, California that formed in Autumn 1996 from the former band members of The Yah Mos, Black Liquorice and Popesmashers.\n\nAfter a tour together, members of local Sacramento, CA bands Black Liquorice and Popesmashers formed !!!. The band's name was inspired by the subtitles of the movie The Gods Must Be Crazy, in which the mouth-clicking sounds of the Bushmen were represented as \"!\". Chk Chk Chk is the most common pronunciation ",
        "yearformed": "0",
        "placeformed": ""
    },
    {
        "id": "3858",
        "name": "!Bang Elektronika",
        "tags": "{\n    \"id\": 50,\n    \"count\": 1,\n    \"name\": \"EBM\"\n}",
        "albums": "1",
        "songs": "15",
        "art": "https:\/\/music.com.au\/image.php?object_id=3858&object_type=artist&auth=eeb9f1b6056246a7d563f479f518bb34",
        "flag": 0,
        "preciserating": 4,
        "rating": 4,
        "averagerating": 0,
        "mbid": "e01b0106-7781-4c80-b7d3-639610a6c5d7",
        "summary": " ",
        "yearformed": "0",
        "placeformed": ""
    },
    {
        "id": "2461",
        "name": "!distain",
        "tags": "{\n    \"id\": 55,\n    \"count\": 1,\n    \"name\": \"Electro\"\n}",
        "albums": "21",
        "songs": "249",
        "art": "https:\/\/music.com.au\/image.php?object_id=2461&object_type=artist&auth=eeb9f1b6056246a7d563f479f518bb34",
        "flag": 0,
        "preciserating": 4,
        "rating": 4,
        "averagerating": 0,
        "mbid": "c60674c3-1cd8-4b2c-ada3-8f99d94c4aad",
        "summary": "!distain (released as Distain! in the 1990's, by now the exclamation mark goes in the front of the name) is a friendly and unpretentious synth-pop band from Munich, Germany, consisting of singer Alexander Braun and Manfred Thomaser.\n\nHere's a short band biography:\n\n1992\nBand foundation by Alexander Braun, Oliver Faig and Sebastian von Wyschetzki.\n\n1994\nFirst public appearance: \"Pop Albert\" Contest Augsburg; first record deal with Chrom Records.\n\n1995 ",
        "yearformed": "0",
        "placeformed": ""
    },
    {
        "id": "1206",
        "name": "\"Weird Al\" Yankovic",
        "tags": "{\n    \"id\": 1409,\n    \"count\": 1,\n    \"name\": \"Hip Hop\"\n}",
        "albums": "22",
        "songs": "296",
        "art": "https:\/\/music.com.au\/image.php?object_id=1206&object_type=artist&auth=eeb9f1b6056246a7d563f479f518bb34",
        "flag": 0,
        "preciserating": 4,
        "rating": 4,
        "averagerating": 0,
        "mbid": "7746d775-9550-4360-b8d5-c37bd448ce01",
        "summary": "Alfred Matthew \"Weird Al\" Yankovic (born October 23, 1959 in Downey, California) is an American singer-songwriter, music producer, actor, comedian, satirist, accordion player and kazooist. Yankovic is known in particular for his humorous songs that make light of popular culture and that often parody specific songs by contemporary musical acts. Since his first-aired song parody in 1976, he has sold more than 12 million albums\u2014more than any other comedy act in history\u2014recorded more than 150 parody and original songs ",
        "yearformed": "0",
        "placeformed": ""
    },
    {
        "id": "15784",
        "name": "#366: A life lived",
        "tags": "{\n    \"id\": 84,\n    \"count\": 1,\n    \"name\": \"IDM\"\n}",
        "albums": "1",
        "songs": "1",
        "art": "https:\/\/music.com.au\/image.php?object_id=15784&object_type=artist&auth=eeb9f1b6056246a7d563f479f518bb34",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "mbid": "dfb2affc-3aaf-475e-b6d5-5a2f7f7d3e8e",
        "summary": null,
        "yearformed": null,
        "placeformed": null
    }
]

```

## artist

* MINIMUM_API_VERSION=380001

This returns a single artist based on the UID of said artist
@param array $input

|Input    |Type|Description|Optional|
|---------|----|-----------|-------:|
|'filter' |    |UID of Artist, returns artist JSON|NO      |
|'include'|array|Array specified using GET convention, can contain `albums` or `songs` and will include the corresponding JSON nested in the artist JSON|NO      |

```JSON
[
    {
        "id": "605",
        "name": "The Prodigy",
        "tags": "{\n    \"id\": 55,\n    \"count\": 1,\n    \"name\": \"Electro\"\n}",
        "albums": "37",
        "songs": "268",
        "art": "https:\/\/music.com.au\/image.php?object_id=605&object_type=artist&auth=eeb9f1b6056246a7d563f479f518bb34",
        "flag": 1,
        "preciserating": 5,
        "rating": 5,
        "averagerating": 0,
        "mbid": "4a4ee089-93b1-4470-af9a-6ff575d32704",
        "summary": "The Prodigy are an English electronic dance music band from Braintree, Essex, formed in 1990 by keyboardist and songwriter Liam Howlett. The line-up of the band has included MC and vocalist Maxim, dancer and vocalist Keith Flint (until his death in March 2019), dancer and live keyboardist Leeroy Thornhill (who left to pursue a solo career in 1999), and dancer and vocalist Sharky (1990-1991). Along with the Chemical Brothers and Fatboy Slim, The Prodigy are credited as pioneers of the breakbeat-influenced genre big beat ",
        "yearformed": "0",
        "placeformed": ""
    }
]

```

## artist_albums

* MINIMUM_API_VERSION=380001

This returns the albums of an artist
@param array $input

|Input   |Type|Description|Optional|
|--------|----|-----------|-------:|
|'filter'|    |UID of Artist, returns Album JSON|NO      |
|'offset'|    |           |YES     |
|'limit' |    |           |YES     |

```JSON
[
    {
        "id": "64870",
        "name": "Need Some1",
        "artist": {
            "id": "605",
            "name": "Prodigy"
        },
        "year": "2018",
        "tracks": "1",
        "disk": "1",
        "tags": "[]",
        "art": "https:\/\/music.com.au\/image.php?object_id=64870&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "mbid": "d945e4db-39b4-4c54-b5f1-b325b6cc81e7"
    },
    {
        "id": "65783",
        "name": "No Tourists",
        "artist": {
            "id": "605",
            "name": "Prodigy"
        },
        "year": "2018",
        "tracks": "10",
        "disk": "1",
        "tags": "{\n    \"id\": 314,\n    \"count\": 1,\n    \"name\": \"Breakbeat\"\n}",
        "art": "https:\/\/music.com.au\/image.php?object_id=65783&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "mbid": "54b0929e-bf4f-4077-a9ae-ec3036064b11"
    },
    {
        "id": "55584",
        "name": "Day Is My Enemy (Expanded Edition)",
        "artist": {
            "id": "605",
            "name": "Prodigy"
        },
        "year": "2015",
        "tracks": "35",
        "disk": "1",
        "tags": "[]",
        "art": "https:\/\/music.com.au\/image.php?object_id=55584&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "mbid": "cbc993c7-40f3-4031-99af-0be41741b664"
    },
    {
        "id": "52829",
        "name": "Night Is My Friend EP",
        "artist": {
            "id": "605",
            "name": "Prodigy"
        },
        "year": "2015",
        "tracks": "5",
        "disk": "1",
        "tags": "[]",
        "art": "https:\/\/music.com.au\/image.php?object_id=52829&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "mbid": "851eed7d-fa2e-4c0f-9c94-b8f3bd592799"
    },
    {
        "id": "11631",
        "name": "Day Is My Enemy",
        "artist": {
            "id": "605",
            "name": "Prodigy"
        },
        "year": "2015",
        "tracks": "8",
        "disk": "1",
        "tags": "{\n    \"id\": 4,\n    \"count\": 1,\n    \"name\": \"Electronic\"\n}",
        "art": "https:\/\/music.com.au\/image.php?object_id=11631&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34",
        "flag": 1,
        "preciserating": 5,
        "rating": 5,
        "averagerating": 0,
        "mbid": "cd842766-9335-4d90-bbce-1614b12cf362"
    },
    {
        "id": "12493",
        "name": "Day Is My Enemy",
        "artist": {
            "id": "605",
            "name": "Prodigy"
        },
        "year": "2015",
        "tracks": "6",
        "disk": "2",
        "tags": "{\n    \"id\": 4,\n    \"count\": 1,\n    \"name\": \"Electronic\"\n}",
        "art": "https:\/\/music.com.au\/image.php?object_id=12493&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "mbid": "cd842766-9335-4d90-bbce-1614b12cf362"
    },
    {
        "id": "68481",
        "name": "Mean Machine",
        "artist": {
            "id": 0,
            "name": "Various"
        },
        "year": "2014",
        "tracks": "5",
        "disk": "1",
        "tags": "{\n    \"id\": 2454,\n    \"count\": 1,\n    \"name\": \"8Bit\"\n}",
        "art": "https:\/\/music.com.au\/image.php?object_id=68481&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "mbid": "82493f29-6400-4e94-a019-7ede1fdcb49d"
    },
    {
        "id": "51428",
        "name": "Added Fat",
        "artist": {
            "id": "605",
            "name": "Prodigy"
        },
        "year": "2012",
        "tracks": "6",
        "disk": "1",
        "tags": "{\n    \"id\": 1461,\n    \"count\": 1,\n    \"name\": \"Drum N Bass\"\n}",
        "art": "https:\/\/music.com.au\/image.php?object_id=51428&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "mbid": "b6fa9ab7-baaa-4d2a-94c7-2a7fc75acc3f"
    },
    {
        "id": "35139",
        "name": "Fat of the Land",
        "artist": {
            "id": "605",
            "name": "Prodigy"
        },
        "year": "2012",
        "tracks": "16",
        "disk": 2,
        "tags": "{\n    \"id\": 314,\n    \"count\": 1,\n    \"name\": \"Breakbeat\"\n}",
        "art": "https:\/\/music.com.au\/image.php?object_id=35139&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "mbid": "f80aac8c-32cc-4a2c-ae2b-658628f505f2"
    },
    {
        "id": "54185",
        "name": "Invaders Must Die",
        "artist": {
            "id": "605",
            "name": "Prodigy"
        },
        "year": "2009",
        "tracks": "13",
        "disk": "1",
        "tags": "[]",
        "art": "https:\/\/music.com.au\/image.php?object_id=54185&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34",
        "flag": 1,
        "preciserating": 5,
        "rating": 5,
        "averagerating": 0,
        "mbid": "dfc85b85-d12e-4950-9378-a3c1e67833d9"
    },
    {
        "id": "49375",
        "name": "Lost Beats",
        "artist": {
            "id": "605",
            "name": "Prodigy"
        },
        "year": "2009",
        "tracks": "4",
        "disk": "1",
        "tags": "[]",
        "art": "https:\/\/music.com.au\/image.php?object_id=49375&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "mbid": "af8bbed8-85a6-4d70-82d0-eba141713dd7"
    }
]
```

## artist_songs

* MINIMUM_API_VERSION=380001

This returns the songs of the specified artist
@param array $input

|Input   |Type|Description|Optional|
|--------|----|-----------|-------:|
|'filter'|    |UID of Artist, returns Song JSON|NO      |
|'offset'|    |           |YES     |
|'limit' |    |           |YES     |

```JSON
[
    {
        "id": "857257",
        "title": "Feel Good Hit of the Fall",
        "artist": {
            "id": "13429",
            "name": "!!!"
        },
        "album": {
            "id": "71670",
            "name": "Softcore Jukebox"
        },
        "filename": "\/mnt\/music\/Ladytron\/(2003) Softcore Jukebox [EMN 7071-2]\/109 - Feel Good Hit of the Fall.flac",
        "track": "9",
        "playlisttrack": "",
        "time": 314,
        "year": "2003",
        "bitrate": "972192",
        "rate": "44100",
        "mode": "vbr",
        "mime": "audio\/x-flac",
        "url": "https:\/\/music.com.au\/play\/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=857257&uid=4&player=api&name=-%20-%20Feel%20Good%20Hit%20of%20the%20Fall.mp3",
        "size": "38262252",
        "mbid": "388170b3-ae1d-4adb-b116-4e046e0f60e8",
        "album_mbid": null,
        "artist_mbid": null,
        "albumartist_mbid": null,
        "art": "https:\/\/music.com.au\/image.php?object_id=71670&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "composer": "",
        "channels": null,
        "comment": "",
        "publisher": "",
        "language": "",
        "replaygain_album_gain": "0.000000",
        "replaygain_album_peak": "0.000000",
        "replaygain_track_gain": "0.000000",
        "replaygain_track_peak": "0.000000",
        "encoding": "UTF-8",
        "disk": "1",
        "barcode": "607217707120",
        "audio_codec": "flac",
        "bpm": "126",
        "totaltracks": "18",
        "original_year": "2003",
        "originaldate": "2003-10-07",
        "releasetype": "album",
        "releasestatus": "official",
        "albumartistsort": "Ladytron",
        "asin": "B0000CA31S",
        "releasecountry": "US",
        "totaldiscs": "1",
        "media": "CD",
        "artistsort": "!!!",
        "artists": "!!!",
        "producer": "!!!",
        "musicbrainz_releasetrackid": "0e99b379-e23a-37d1-a777-7ff555217fa6",
        "tracktotal": "18",
        "disctotal": "1",
        "tool_name": "Media Center",
        "peak_level__sample_": "-2.9 dB; -3.1 Left; -2.9 Right",
        "volume_level__r128_": "-11.0585498809814453",
        "script": "Latn",
        "dynamic_range__dr_": "8",
        "album_artist": "Ladytron",
        "peak_level__r128_": "-2.3 dBTP; -3.0 Left; -2.3 Right",
        "dynamic_range__r128_": "3.2730998992919922",
        "volume_level__replaygain_": "-6.0585498809814453",
        "jr_date": "37901",
        "tool_version": "24.0.45",
        "tags": [
            "Electro"
        ]
    }
]

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
|'include'|array|Array specified using GET convention, can contain `songs` and will include the corresponding JSON nested in the album JSON|YES     |

```JSON
[
    {
        "id": "51428",
        "name": "Added Fat",
        "artist": {
            "id": "605",
            "name": "Prodigy"
        },
        "year": "2012",
        "tracks": "6",
        "disk": "1",
        "tags": "{\n    \"id\": 1461,\n    \"count\": 1,\n    \"name\": \"Drum N Bass\"\n}",
        "art": "https:\/\/music.com.au\/image.php?object_id=51428&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "mbid": "b6fa9ab7-baaa-4d2a-94c7-2a7fc75acc3f"
    },
    {
        "id": "67021",
        "name": "Allfather",
        "artist": {
            "id": "13382",
            "name": "Vanir"
        },
        "year": "2019",
        "tracks": "12",
        "disk": "1",
        "tags": "{\n    \"id\": 95,\n    \"count\": 1,\n    \"name\": \"Viking Metal\"\n}",
        "art": "https:\/\/music.com.au\/image.php?object_id=67021&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "mbid": "8213286d-dc44-4feb-bfcf-fefe37f615bc"
    },
    {
        "id": "68985",
        "name": "Baby Fat: Act 1",
        "artist": {
            "id": "15154",
            "name": "Screeching Weasel"
        },
        "year": "2015",
        "tracks": "27",
        "disk": "1",
        "tags": "[]",
        "art": "https:\/\/music.com.au\/image.php?object_id=68985&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "mbid": "430a071f-f2d9-4ebd-b109-6467a6919302"
    },
    {
        "id": "51387",
        "name": "Breakfast at Fatboys",
        "artist": {
            "id": "4086",
            "name": "Butterfingers"
        },
        "year": "2004",
        "tracks": "13",
        "disk": "1",
        "tags": "{\n    \"id\": 1409,\n    \"count\": 1,\n    \"name\": \"Hip Hop\"\n}",
        "art": "https:\/\/music.com.au\/image.php?object_id=51387&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34",
        "flag": 0,
        "preciserating": 1,
        "rating": 1,
        "averagerating": 0,
        "mbid": "778b257a-b104-4c42-9276-656ea22cc5b2"
    },
    {
        "id": "43396",
        "name": "Creator Of Fate",
        "artist": {
            "id": "4037",
            "name": "Fate Creator"
        },
        "year": "2012",
        "tracks": "8",
        "disk": "1",
        "tags": "{\n    \"id\": 55,\n    \"count\": 1,\n    \"name\": \"Electro\"\n}",
        "art": "https:\/\/music.com.au\/image.php?object_id=43396&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "mbid": null
    },
    {
        "id": "43779",
        "name": "Digital Fate",
        "artist": {
            "id": "886",
            "name": "Say Y"
        },
        "year": "2012",
        "tracks": "17",
        "disk": "1",
        "tags": "[]",
        "art": "https:\/\/music.com.au\/image.php?object_id=43779&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "mbid": null
    },
    {
        "id": "51433",
        "name": "Fat Mixes",
        "artist": {
            "id": "605",
            "name": "Prodigy"
        },
        "year": "1997",
        "tracks": "12",
        "disk": "1",
        "tags": "[]",
        "art": "https:\/\/music.com.au\/image.php?object_id=51433&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "mbid": "907dc667-7eb9-46aa-a54b-678b06500777"
    },
    {
        "id": "49374",
        "name": "Fat of the Land",
        "artist": {
            "id": "605",
            "name": "Prodigy"
        },
        "year": "1997",
        "tracks": "10",
        "disk": "1",
        "tags": "[]",
        "art": "https:\/\/music.com.au\/image.php?object_id=49374&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34",
        "flag": 1,
        "preciserating": 5,
        "rating": 5,
        "averagerating": 0,
        "mbid": "c956c002-0eab-3dc9-8cc1-40524682a4ce"
    },
    {
        "id": "35138",
        "name": "Fat of the Land",
        "artist": {
            "id": "605",
            "name": "Prodigy"
        },
        "year": "2012",
        "tracks": "16",
        "disk": 2,
        "tags": "{\n    \"id\": 314,\n    \"count\": 1,\n    \"name\": \"Breakbeat\"\n}",
        "art": "https:\/\/music.com.au\/image.php?object_id=35138&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "mbid": "f80aac8c-32cc-4a2c-ae2b-658628f505f2"
    },
    {
        "id": "65078",
        "name": "Fata Morgana",
        "artist": {
            "id": "6169",
            "name": "Fata Morgana"
        },
        "year": "2017",
        "tracks": "7",
        "disk": "1",
        "tags": "{\n    \"id\": 1612,\n    \"count\": 1,\n    \"name\": \"Neo-Classical\"\n}",
        "art": "https:\/\/music.com.au\/image.php?object_id=65078&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "mbid": null
    },
    {
        "id": "49303",
        "name": "Fatal Design",
        "artist": {
            "id": "543",
            "name": "Entwine"
        },
        "year": "2006",
        "tracks": "10",
        "disk": "1",
        "tags": "[]",
        "art": "https:\/\/music.com.au\/image.php?object_id=49303&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "mbid": "f420a6cf-a98d-4803-b09e-7055586e634d"
    },
    {
        "id": "56469",
        "name": "Fatal\/Error",
        "artist": {
            "id": "8808",
            "name": "Droids Attack"
        },
        "year": "2016",
        "tracks": "8",
        "disk": "1",
        "tags": "[]",
        "art": "https:\/\/music.com.au\/image.php?object_id=56469&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "mbid": "14b3f8c4-0c18-4797-872b-706815da00f9"
    },
    {
        "id": "53522",
        "name": "Fatale",
        "artist": {
            "id": "6819",
            "name": "Pedestrian Deposit"
        },
        "year": "2006",
        "tracks": "4",
        "disk": "1",
        "tags": "{\n    \"id\": 154,\n    \"count\": 1,\n    \"name\": \"Noise\"\n}",
        "art": "https:\/\/music.com.au\/image.php?object_id=53522&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "mbid": "5b962e41-30ac-43b9-a828-98824c7691fd"
    },
    {
        "id": "52572",
        "name": "Fate of Norns",
        "artist": {
            "id": "2222",
            "name": "Amon Amarth"
        },
        "year": "2004",
        "tracks": "8",
        "disk": "1",
        "tags": "[]",
        "art": "https:\/\/music.com.au\/image.php?object_id=52572&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "mbid": "60b46304-7783-3e40-acab-41ef7ad4ed3d"
    },
    {
        "id": "50583",
        "name": "Father Don't Cry",
        "artist": {
            "id": "12599",
            "name": "Doubting Thomas"
        },
        "year": "1997",
        "tracks": "8",
        "disk": "1",
        "tags": "{\n    \"id\": 84,\n    \"count\": 1,\n    \"name\": \"IDM\"\n}",
        "art": "https:\/\/music.com.au\/image.php?object_id=50583&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "mbid": "9c41dcf9-ca42-4b9a-a72a-fc18090d5309"
    },
    {
        "id": "67769",
        "name": "Father of the Bride",
        "artist": {
            "id": "2301",
            "name": "Vampire Weekend"
        },
        "year": "2019",
        "tracks": "18",
        "disk": "1",
        "tags": "{\n    \"id\": 36,\n    \"count\": 1,\n    \"name\": \"Indie Rock\"\n}",
        "art": "https:\/\/music.com.au\/image.php?object_id=67769&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "mbid": "929c9ee5-1fa1-4e9f-a7d6-5a1e89459a20"
    },
    {
        "id": "49903",
        "name": "Fatherfucker",
        "artist": {
            "id": "1121",
            "name": "Peaches"
        },
        "year": "2003",
        "tracks": "12",
        "disk": "1",
        "tags": "[]",
        "art": "https:\/\/music.com.au\/image.php?object_id=49903&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "mbid": "91cef220-2357-473f-9553-afa3f1f34460"
    },
    {
        "id": "57832",
        "name": "Fatherland",
        "artist": {
            "id": "9273",
            "name": "Fatherland"
        },
        "year": "2017",
        "tracks": "10",
        "disk": "1",
        "tags": "[]",
        "art": "https:\/\/music.com.au\/image.php?object_id=57832&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "mbid": "c21eb058-1b22-47c8-b450-e9e58cf1bb4c"
    },
    {
        "id": "14057",
        "name": "Fatum: 2000-2012",
        "artist": {
            "id": "2218",
            "name": "Mantus"
        },
        "year": "2013",
        "tracks": "30",
        "disk": 2,
        "tags": "{\n    \"id\": 2588,\n    \"count\": 1,\n    \"name\": \"Experemental\"\n}",
        "art": "https:\/\/music.com.au\/image.php?object_id=14057&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34",
        "flag": 1,
        "preciserating": 5,
        "rating": 5,
        "averagerating": 0,
        "mbid": "14172ecc-20d8-4db3-b2d6-65587e409e7c"
    },
    {
        "id": "43391",
        "name": "Forgiving Fate",
        "artist": {
            "id": "831",
            "name": "Infernosounds"
        },
        "year": "2013",
        "tracks": "6",
        "disk": "1",
        "tags": "{\n    \"id\": 55,\n    \"count\": 1,\n    \"name\": \"Electro\"\n}",
        "art": "https:\/\/music.com.au\/image.php?object_id=43391&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "mbid": null
    },
    {
        "id": "16386",
        "name": "Hustle! The Ultimate Fatback 1969-84",
        "artist": {
            "id": "5776",
            "name": "Fatback Band"
        },
        "year": "2004",
        "tracks": "31",
        "disk": 2,
        "tags": "{\n    \"id\": 18,\n    \"count\": 1,\n    \"name\": \"Funk\"\n}",
        "art": "https:\/\/music.com.au\/image.php?object_id=16386&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "mbid": "7052711d-fd59-4224-aa33-63f065ec61dc"
    },
    {
        "id": "18753",
        "name": "My Father Will Guide Me Up a Rope to the Sky",
        "artist": {
            "id": "805",
            "name": "SWANS"
        },
        "year": "2010",
        "tracks": "9",
        "disk": 2,
        "tags": "{\n    \"id\": 154,\n    \"count\": 1,\n    \"name\": \"Noise\"\n}",
        "art": "https:\/\/music.com.au\/image.php?object_id=18753&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "mbid": "e677ea65-76b7-4e46-9572-0e8fd21854f8"
    },
    {
        "id": "70820",
        "name": "My Father's Face",
        "artist": {
            "id": "15958",
            "name": "Leo Kottke"
        },
        "year": "1989",
        "tracks": "11",
        "disk": "1",
        "tags": "{\n    \"id\": 70,\n    \"count\": 1,\n    \"name\": \"Folk\"\n}",
        "art": "https:\/\/music.com.au\/image.php?object_id=70820&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "mbid": "a6d6f0d3-8402-4063-9809-6c61c06c1dc1"
    },
    {
        "id": "71588",
        "name": "Our Fathers Who Aren't In Heaven",
        "artist": {
            "id": 0,
            "name": "Various"
        },
        "year": "1990",
        "tracks": "11",
        "disk": 2,
        "tags": "{\n    \"id\": 258,\n    \"count\": 1,\n    \"name\": \"Spoken Word\"\n}",
        "art": "https:\/\/music.com.au\/image.php?object_id=71588&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "mbid": "e57be92f-4c63-4300-9675-ce28ac6f1340"
    },
    {
        "id": "57690",
        "name": "Sacrilege of Fatal Arms",
        "artist": {
            "id": "9229",
            "name": "Devil Doll"
        },
        "year": "1993",
        "tracks": "1",
        "disk": "1",
        "tags": "{\n    \"id\": 1443,\n    \"count\": 1,\n    \"name\": \"Avantgarde\"\n}",
        "art": "https:\/\/music.com.au\/image.php?object_id=57690&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "mbid": "b6d50183-fc0f-45b9-ab0e-d9238cb37d7c"
    },
    {
        "id": "65953",
        "name": "Son of My Father",
        "artist": {
            "id": "10263",
            "name": "Giorgio Moroder & Phil Oakey"
        },
        "year": "1972",
        "tracks": "12",
        "disk": "1",
        "tags": "{\n    \"id\": 22,\n    \"count\": 1,\n    \"name\": \"Pop\"\n}",
        "art": "https:\/\/music.com.au\/image.php?object_id=65953&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "mbid": "b671a3e3-0a8e-4add-b815-b97d94beeda2"
    },
    {
        "id": "53037",
        "name": "Tha Doggfather",
        "artist": {
            "id": "4375",
            "name": "Snoop Doggy Dogg"
        },
        "year": "2001",
        "tracks": "21",
        "disk": "1",
        "tags": "[]",
        "art": "https:\/\/music.com.au\/image.php?object_id=53037&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "mbid": "ae2df845-83f4-49f7-bd66-a9478c37e620"
    },
    {
        "id": "70201",
        "name": "This Is Fats",
        "artist": {
            "id": "15561",
            "name": "Fats Domino"
        },
        "year": "1958",
        "tracks": "12",
        "disk": "1",
        "tags": "{\n    \"id\": 473,\n    \"count\": 1,\n    \"name\": \"Vocal\"\n}",
        "art": "https:\/\/music.com.au\/image.php?object_id=70201&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "mbid": "cc40dde8-717c-4e0c-b645-f94e98ada9f7"
    },
    {
        "id": "59514",
        "name": "You're the One for Me, Fatty",
        "artist": {
            "id": "7636",
            "name": "Morrissey"
        },
        "year": "1992",
        "tracks": "3",
        "disk": "1",
        "tags": "[]",
        "art": "https:\/\/music.com.au\/image.php?object_id=59514&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "mbid": "196f50b9-2001-4ba3-8423-9eeca31f31d3"
    }
]

```

## album

* MINIMUM_API_VERSION=380001

This returns a single album based on the UID provided
@param array $input

|Input    |Type|Description|Optional|
|---------|----|-----------|-------:|
|'filter' |    |UID of Album, returns album JSON|NO      |
|'include'|array|Array specified using GET convention, can contain `songs` and will include the corresponding JSON nested in the album JSON|NO      |

```JSON
[
    {
    "id": "54185",
    "name": "Invaders Must Die",
    "artist": {
    "id": "605",
    "name": "Prodigy"
    },
    "year": "2009",
    "tracks": "13",
    "disk": "1",
    "tags": "[]",
    "art": "https:\\/\\/music.com.au\\/image.php?object_id=54185&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34",
    "flag": 1,
    "preciserating": 5,
    "rating": 5,
    "averagerating": 0,
    "mbid": "dfc85b85-d12e-4950-9378-a3c1e67833d9"
    }
]

```

## album_songs

* MINIMUM_API_VERSION=380001

This returns the songs of a specified album
@param array $input

|Input   |Type|Description|Optional|
|--------|----|-----------|-------:|
|'filter'|    |UID of Album, returns song JSON|NO      |
|'offset'|    |           |YES     |
|'limit' |    |           |YES     |

```JSON
[
    {
        "id": "131829",
        "title": "Invaders Must Die",
        "artist": {
            "id": "605",
            "name": "The Prodigy"
        },
        "album": {
            "id": "54185",
            "name": "Invaders Must Die"
        },
        "filename": "\\/mnt\\/music\\/The Prodigy\\/(2009) Invaders Must Die [VICP-64654]\\/101 - Invaders Must Die.mp3",
        "track": "1",
        "playlisttrack": "",
        "time": 295,
        "year": "2009",
        "bitrate": "198031",
        "rate": "44100",
        "mode": "vbr",
        "mime": "audio\\/mpeg",
        "url": "https:\\/\\/music.com.au\\/play\\/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=131829&uid=2&player=api&name=The%20Prodigy%20-%20Invaders%20Must%20Die.mp3",
        "size": "7308593",
        "mbid": "2e0cf182-54d5-4209-8416-e18b967dd6ea",
        "album_mbid": null,
        "artist_mbid": null,
        "albumartist_mbid": null,
        "art": "https:\\/\\/music.com.au\\/image.php?object_id=54185&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg",
        "flag": 1,
        "preciserating": 5,
        "rating": 5,
        "averagerating": 0,
        "composer": "Nick Halkes",
        "channels": null,
        "comment": "Limited Edition",
        "publisher": "Victor",
        "language": "eng",
        "replaygain_album_gain": "0.000000",
        "replaygain_album_peak": "0.000000",
        "replaygain_track_gain": "-10.320000",
        "replaygain_track_peak": "1.000000",
        "encoding": "UTF-8",
        "disk": "1",
        "totaldisks": "1",
        "band": "The Prodigy",
        "release_type": "album",
        "barcode": "4988002565320",
        "audio_codec": "mp3",
        "recording_time": "2009-02-18",
        "bpm": "139",
        "lyricist": "Nick Halkes; Liam Howlett",
        "performer_sort_order": "The Prodigy",
        "album_artist_sort_order": "The Prodigy",
        "media_type": "CD",
        "original_release_time": "2009-02-18",
        "involved_people_list": "producer",
        "isrc": "GBCEJ0800386",
        "totaltracks": "13",
        "tags": [
            "Big Beat"
        ]
    },
    {
        "id": "131820",
        "title": "Omen",
        "artist": {
            "id": "605",
            "name": "The Prodigy"
        },
        "album": {
            "id": "54185",
            "name": "Invaders Must Die"
        },
        "filename": "\\/mnt\\/music\\/The Prodigy\\/(2009) Invaders Must Die [VICP-64654]\\/102 - Omen.mp3",
        "track": "2",
        "playlisttrack": "",
        "time": 216,
        "year": "2009",
        "bitrate": "211470",
        "rate": "44100",
        "mode": "vbr",
        "mime": "audio\\/mpeg",
        "url": "https:\\/\\/music.com.au\\/play\\/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=131820&uid=2&player=api&name=The%20Prodigy%20-%20Omen.mp3",
        "size": "5715146",
        "mbid": "c71786ed-6b2e-42a1-9be4-bbb039176b1f",
        "album_mbid": null,
        "artist_mbid": null,
        "albumartist_mbid": null,
        "art": "https:\\/\\/music.com.au\\/image.php?object_id=54185&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg",
        "flag": 1,
        "preciserating": 5,
        "rating": 5,
        "averagerating": 0,
        "composer": "Tim Hutton",
        "channels": null,
        "comment": "Limited Edition",
        "publisher": "Victor",
        "language": "eng",
        "replaygain_album_gain": "0.000000",
        "replaygain_album_peak": "0.000000",
        "replaygain_track_gain": "-9.820000",
        "replaygain_track_peak": "1.000000",
        "encoding": "UTF-8",
        "disk": "1",
        "totaldisks": "1",
        "band": "The Prodigy",
        "release_type": "album",
        "barcode": "4988002565320",
        "audio_codec": "mp3",
        "recording_time": "2009-02-18",
        "bpm": "139",
        "lyricist": "Tim Hutton; Keith Palmer; Liam Howlett",
        "performer_sort_order": "The Prodigy",
        "album_artist_sort_order": "The Prodigy",
        "original_release_time": "2009-02-18",
        "isrc": "GBCEJ0800392",
        "media_type": "CD",
        "musician_credits_list": "vocal",
        "involved_people_list": "producer",
        "totaltracks": "13",
        "tags": [
            "Big Beat"
        ]
    },
    {
        "id": "131818",
        "title": "Thunder",
        "artist": {
            "id": "605",
            "name": "The Prodigy"
        },
        "album": {
            "id": "54185",
            "name": "Invaders Must Die"
        },
        "filename": "\\/mnt\\/music\\/The Prodigy\\/(2009) Invaders Must Die [VICP-64654]\\/103 - Thunder.mp3",
        "track": "3",
        "playlisttrack": "",
        "time": 249,
        "year": "2009",
        "bitrate": "202159",
        "rate": "44100",
        "mode": "vbr",
        "mime": "audio\\/mpeg",
        "url": "https:\\/\\/music.com.au\\/play\\/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=131818&uid=2&player=api&name=The%20Prodigy%20-%20Thunder.mp3",
        "size": "6309281",
        "mbid": "0579363a-cad9-4da7-97a8-2bec12aacff9",
        "album_mbid": null,
        "artist_mbid": null,
        "albumartist_mbid": null,
        "art": "https:\\/\\/music.com.au\\/image.php?object_id=54185&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg",
        "flag": 0,
        "preciserating": 4,
        "rating": 4,
        "averagerating": 0,
        "composer": "Tim Hutton",
        "channels": null,
        "comment": "Limited Edition",
        "publisher": "Victor",
        "language": "eng",
        "replaygain_album_gain": "0.000000",
        "replaygain_album_peak": "0.000000",
        "replaygain_track_gain": "-9.940000",
        "replaygain_track_peak": "1.000000",
        "encoding": "UTF-8",
        "disk": "1",
        "totaldisks": "1",
        "band": "The Prodigy",
        "release_type": "album",
        "barcode": "4988002565320",
        "audio_codec": "mp3",
        "recording_time": "2009-02-18",
        "bpm": "65",
        "lyricist": "Tim Hutton; Liam Howlett; Trevor Joe",
        "performer_sort_order": "The Prodigy",
        "album_artist_sort_order": "The Prodigy",
        "original_release_time": "2009-02-18",
        "isrc": "GBCEJ0800388",
        "media_type": "CD",
        "musician_credits_list": "vocal",
        "involved_people_list": "producer",
        "totaltracks": "13",
        "tags": [
            "Big Beat"
        ]
    },
    {
        "id": "131828",
        "title": "Colours",
        "artist": {
            "id": "605",
            "name": "The Prodigy"
        },
        "album": {
            "id": "54185",
            "name": "Invaders Must Die"
        },
        "filename": "\\/mnt\\/music\\/The Prodigy\\/(2009) Invaders Must Die [VICP-64654]\\/104 - Colours.mp3",
        "track": "4",
        "playlisttrack": "",
        "time": 207,
        "year": "2009",
        "bitrate": "226132",
        "rate": "44100",
        "mode": "vbr",
        "mime": "audio\\/mpeg",
        "url": "https:\\/\\/music.com.au\\/play\\/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=131828&uid=2&player=api&name=The%20Prodigy%20-%20Colours.mp3",
        "size": "5880800",
        "mbid": "758279dc-9cfd-4918-af55-dfbf439de7f3",
        "album_mbid": null,
        "artist_mbid": null,
        "albumartist_mbid": null,
        "art": "https:\\/\\/music.com.au\\/image.php?object_id=54185&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg",
        "flag": 1,
        "preciserating": 5,
        "rating": 5,
        "averagerating": 0,
        "composer": "Ian Dench",
        "channels": null,
        "comment": "Limited Edition",
        "publisher": "Victor",
        "language": "eng",
        "replaygain_album_gain": "0.000000",
        "replaygain_album_peak": "0.000000",
        "replaygain_track_gain": "-11.890000",
        "replaygain_track_peak": "1.000000",
        "encoding": "UTF-8",
        "disk": "1",
        "totaldisks": "1",
        "band": "The Prodigy",
        "release_type": "album",
        "barcode": "4988002565320",
        "audio_codec": "mp3",
        "recording_time": "2009-02-18",
        "bpm": "146",
        "lyricist": "Ian Dench; Keith Flint; John Fortis; Liam Howlett",
        "performer_sort_order": "The Prodigy",
        "album_artist_sort_order": "The Prodigy",
        "original_release_time": "2009-02-18",
        "isrc": "GBCEJ0800387",
        "media_type": "CD",
        "musician_credits_list": "vocal",
        "involved_people_list": "producer",
        "totaltracks": "13",
        "tags": [
            "Big Beat"
        ]
    },
    {
        "id": "131824",
        "title": "Take Me to the Hospital",
        "artist": {
            "id": "605",
            "name": "The Prodigy"
        },
        "album": {
            "id": "54185",
            "name": "Invaders Must Die"
        },
        "filename": "\\/mnt\\/music\\/The Prodigy\\/(2009) Invaders Must Die [VICP-64654]\\/105 - Take Me to the Hospital.mp3",
        "track": "5",
        "playlisttrack": "",
        "time": 220,
        "year": "2009",
        "bitrate": "214436",
        "rate": "44100",
        "mode": "vbr",
        "mime": "audio\\/mpeg",
        "url": "https:\\/\\/music.com.au\\/play\\/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=131824&uid=2&player=api&name=The%20Prodigy%20-%20Take%20Me%20to%20the%20Hospital.mp3",
        "size": "5908717",
        "mbid": "57fbc22c-862f-4ac5-b4ad-28cffec38ced",
        "album_mbid": null,
        "artist_mbid": null,
        "albumartist_mbid": null,
        "art": "https:\\/\\/music.com.au\\/image.php?object_id=54185&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg",
        "flag": 1,
        "preciserating": 5,
        "rating": 5,
        "averagerating": 0,
        "composer": "Keith Flint",
        "channels": null,
        "comment": "Limited Edition",
        "publisher": "Victor",
        "language": "eng",
        "replaygain_album_gain": "0.000000",
        "replaygain_album_peak": "0.000000",
        "replaygain_track_gain": "-10.080000",
        "replaygain_track_peak": "1.000000",
        "encoding": "UTF-8",
        "disk": "1",
        "totaldisks": "1",
        "band": "The Prodigy",
        "release_type": "album",
        "barcode": "4988002565320",
        "audio_codec": "mp3",
        "recording_time": "2009-02-18",
        "bpm": "82",
        "lyricist": "Keith Flint; Jari Salo; Liam Howlett; Paul Malmstr\\u00f6m",
        "performer_sort_order": "The Prodigy",
        "album_artist_sort_order": "The Prodigy",
        "involved_people_list": "producer",
        "media_type": "CD",
        "isrc": "GBCEJ0800390",
        "original_release_time": "2009-02-18",
        "musician_credits_list": "vocal",
        "tagging_time": "2013-07-24T07:41:53",
        "totaltracks": "13",
        "tags": [
            "Big Beat"
        ]
    },
    {
        "id": "131825",
        "title": "Warrior\'s Dance",
        "artist": {
            "id": "605",
            "name": "The Prodigy"
        },
        "album": {
            "id": "54185",
            "name": "Invaders Must Die"
        },
        "filename": "\\/mnt\\/music\\/The Prodigy\\/(2009) Invaders Must Die [VICP-64654]\\/106 - Warrior\'s Dance.mp3",
        "track": "6",
        "playlisttrack": "",
        "time": 312,
        "year": "2009",
        "bitrate": "213399",
        "rate": "44100",
        "mode": "vbr",
        "mime": "audio\\/mpeg",
        "url": "https:\\/\\/music.com.au\\/play\\/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=131825&uid=2&player=api&name=The%20Prodigy%20-%20Warrior-s%20Dance.mp3",
        "size": "8353462",
        "mbid": "fe5a81c7-16e9-49f5-855f-3695e2815563",
        "album_mbid": null,
        "artist_mbid": null,
        "albumartist_mbid": null,
        "art": "https:\\/\\/music.com.au\\/image.php?object_id=54185&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg",
        "flag": 1,
        "preciserating": 5,
        "rating": 5,
        "averagerating": 0,
        "composer": "Anthony Srock",
        "channels": null,
        "comment": "Limited Edition",
        "publisher": "Victor",
        "language": "eng",
        "replaygain_album_gain": "0.000000",
        "replaygain_album_peak": "0.000000",
        "replaygain_track_gain": "-9.170000",
        "replaygain_track_peak": "1.000000",
        "encoding": "UTF-8",
        "disk": "1",
        "totaldisks": "1",
        "band": "The Prodigy",
        "release_type": "album",
        "barcode": "4988002565320",
        "audio_codec": "mp3",
        "recording_time": "2009-02-18",
        "bpm": "68",
        "lyricist": "Anthony Srock; Jeff Mills; Bridgett Grace; Liam Howlett",
        "performer_sort_order": "The Prodigy",
        "album_artist_sort_order": "The Prodigy",
        "media_type": "CD",
        "original_release_time": "2009-02-18",
        "involved_people_list": "producer",
        "isrc": "GBCEJ0800391",
        "totaltracks": "13",
        "tags": [
            "Big Beat"
        ]
    }
]
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

```JSON
[
    {
        "tag": {
            "id": "1143",
            "name": "Brutal Death Metal",
            "albums": 7,
            "artists": 18,
            "songs": 303,
            "videos": 0,
            "playlists": 0,
            "stream": 0
        }
    }
]

```

## tag

* MINIMUM_API_VERSION=380001

This returns a single tag based on UID
@param array $input

|Input   |Type|Description|Optional|
|--------|----|-----------|-------:|
|'filter'|    |UID of tag, returns tag JSON|NO      |

```JSON
[
    {
        "tag": {
            "id": "1143",
            "name": "Brutal Death Metal",
            "albums": 1,
            "artists": 17,
            "songs": 358,
            "videos": 0,
            "playlists": 0,
            "stream": 0
        }
    }
]
```

## tag_artists

* MINIMUM_API_VERSION=380001

This returns the artists associated with the tag in question as defined by the UID
@param array $input

|Input   |Type|Description|Optional|
|--------|----|-----------|-------:|
|'filter'|    |UID of tag, returns artist JSON|NO      |
|'offset'|    |           |YES     |
|'limit' |    |           |YES     |

```JSON
[
    {
        "id": "9070",
        "name": "Carnal Decay",
        "tags": "{\n    \"id\": 1143,\n    \"count\": 1,\n    \"name\": \"Brutal Death Metal\"\n}",
        "albums": "3",
        "songs": "28",
        "art": "https:\/\/music.com.au\/image.php?object_id=9070&object_type=artist&auth=9437970b8baa8d40a09e5298264b3f6a",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "mbid": "9ddf93f7-f0c4-4270-a099-e09509822c54",
        "summary": null,
        "yearformed": null,
        "placeformed": null
    }
]
```

## tag_albums

* MINIMUM_API_VERSION=380001

This returns the albums associated with the tag in question
@param array $input

|Input   |Type|Description|Optional|
|--------|----|-----------|-------:|
|'filter'|    |UID of tag, returns album JSON|NO      |
|'offset'|    |           |YES     |
|'limit' |    |           |YES     |

```JSON
[
    {
        "id": "65298",
        "name": "Legacy of the Ancients",
        "artist": {
            "id": "11725",
            "name": "Pathology"
        },
        "year": "2010",
        "tracks": "11",
        "disk": "1",
        "tags": "{\n    \"id\": 6,\n    \"count\": 1,\n    \"name\": \"Rock\"\n}",
        "art": "https:\/\/music.com.au\/image.php?object_id=65298&object_type=album&auth=9437970b8baa8d40a09e5298264b3f6a",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "mbid": "4fb343d2-ec5b-4d2b-9cc2-64c764749ec7"
    }
]
```

## tag_songs

* MINIMUM_API_VERSION=380001

returns the songs for this tag
@param array $input

|Input   |Type|Description|Optional|
|--------|----|-----------|-------:|
|'filter'|    |UID of tag, returns song JSON|NO      |
|'offset'|    |           |YES     |
|'limit' |    |           |YES     |

```JSON
[
    {
        "id": "181321",
        "title": "See You in Hell",
        "artist": {
            "id": "9070",
            "name": "Carnal Decay"
        },
        "album": {
            "id": "57278",
            "name": "On Top of the Food Chain"
        },
        "filename": "\/mnt\/music\/Carnal Decay\/(2011) On Top of the Food Chain [SR-156]\/105 - See You in Hell.mp3",
        "track": "5",
        "playlisttrack": "",
        "time": 216,
        "year": "2011",
        "bitrate": "320000",
        "rate": "44100",
        "mode": "cbr",
        "mime": "audio\/mpeg",
        "url": "https:\/\/music.com.au\/play\/index.php?ssid=9437970b8baa8d40a09e5298264b3f6a&type=song&oid=181321&uid=3&player=api&name=Carnal%20Decay%20-%20See%20You%20in%20Hell.mp3",
        "size": "10310218",
        "mbid": "ee11951f-94b0-4dda-8ac6-d0ac5de716b4",
        "album_mbid": null,
        "artist_mbid": null,
        "albumartist_mbid": null,
        "art": "https:\/\/music.com.au\/image.php?object_id=57278&object_type=album&auth=9437970b8baa8d40a09e5298264b3f6a&name=art.jpg",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "composer": "",
        "channels": null,
        "comment": "",
        "publisher": "Sevared Records",
        "language": "",
        "replaygain_album_gain": "0.000000",
        "replaygain_album_peak": "0.000000",
        "replaygain_track_gain": "-13.150000",
        "replaygain_track_peak": "1.000000",
        "tags": [
            "Brutal Death Metal"
        ]
    }
]
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

```JSON
[
    {
        "id": "164215",
        "title": "!",
        "artist": {
            "id": "8526",
            "name": "Hellyeah"
        },
        "album": {
            "id": "56038",
            "name": "Unden!able"
        },
        "filename": "\/mnt\/music\/Hellyeah\/(2016) Unden!able [ESM 171-2]\/101 - !.mp3",
        "track": "1",
        "playlisttrack": "",
        "time": 79,
        "year": "2016",
        "bitrate": "320000",
        "rate": "44100",
        "mode": "cbr",
        "mime": "audio\/mpeg",
        "url": "https:\/\/music.com.au\/play\/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=164215&uid=4&player=api&name=Hellyeah%20-%20-.mp3",
        "size": "3184944",
        "mbid": "42bb2b7a-bf67-4cc4-8610-25399d56474b",
        "album_mbid": null,
        "artist_mbid": null,
        "albumartist_mbid": null,
        "art": "https:\/\/music.com.au\/image.php?object_id=56038&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "composer": "",
        "channels": null,
        "comment": "",
        "publisher": "Eleven Seven Music",
        "language": "",
        "replaygain_album_gain": "0.000000",
        "replaygain_album_peak": "0.000000",
        "replaygain_track_gain": "-6.920000",
        "replaygain_track_peak": "1.000000",
        "tags": [
            "Metal",
            "Hard Rock"
        ]
    },
    {
        "id": "41252",
        "title": "! (The Song Formerly Known As)",
        "artist": {
            "id": "1464",
            "name": "Regurgitator"
        },
        "album": {
            "id": "50272",
            "name": "Unit"
        },
        "filename": "\/mnt\/music\/Regurgitator\/(1997) Unit\/103 - ! (The Song Formerly Known As).mp3",
        "track": "3",
        "playlisttrack": "",
        "time": 208,
        "year": "1997",
        "bitrate": "160000",
        "rate": "44100",
        "mode": "cbr",
        "mime": "audio\/mpeg",
        "url": "https:\/\/music.com.au\/play\/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=41252&uid=4&player=api&name=Regurgitator%20-%20-%20-The%20Song%20Formerly%20Known%20As-.mp3",
        "size": "4198110",
        "mbid": "5e14ee48-6337-4a70-8992-1ed74dddb945",
        "album_mbid": null,
        "artist_mbid": null,
        "albumartist_mbid": null,
        "art": "https:\/\/music.com.au\/image.php?object_id=50272&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "composer": "",
        "channels": null,
        "comment": "",
        "publisher": null,
        "language": "",
        "replaygain_album_gain": "0.000000",
        "replaygain_album_peak": "0.000000",
        "replaygain_track_gain": "-10.460000",
        "replaygain_track_peak": "1.000000",
        "tags": [
            "Alternative"
        ]
    },
    {
        "id": "84148",
        "title": "! (The Song Formerly Known As)",
        "artist": {
            "id": "1464",
            "name": "Regurgitator"
        },
        "album": {
            "id": "32856",
            "name": "Triple J: Hottest 100, Volume 6"
        },
        "filename": "\/mnt\/music\/Various Artists\/(1999) Triple J: Hottest 100, Volume 6\/212 - ! (The Song Formerly Known As).mp3",
        "track": "12",
        "playlisttrack": "",
        "time": 207,
        "year": "1999",
        "bitrate": "160000",
        "rate": "44100",
        "mode": "cbr",
        "mime": "audio\/mpeg",
        "url": "https:\/\/music.com.au\/play\/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=84148&uid=4&player=api&name=Regurgitator%20-%20-%20-The%20Song%20Formerly%20Known%20As-.mp3",
        "size": "4149473",
        "mbid": "5e14ee48-6337-4a70-8992-1ed74dddb945",
        "album_mbid": null,
        "artist_mbid": null,
        "albumartist_mbid": null,
        "art": "https:\/\/music.com.au\/image.php?object_id=32856&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "composer": "",
        "channels": null,
        "comment": "",
        "publisher": "EMI Music Australia; Triple J",
        "language": "",
        "replaygain_album_gain": "0.000000",
        "replaygain_album_peak": "0.000000",
        "replaygain_track_gain": "-8.090000",
        "replaygain_track_peak": "1.000000",
        "encoding": "UTF-8",
        "disk": "2",
        "totaldisks": "2",
        "band": "Various Artists",
        "release_type": "album\u0000\ufeffcompilation",
        "barcode": "724352103423",
        "audio_codec": "mp3",
        "recording_time": "1999-07-05",
        "bpm": "146",
        "album_artist_sort_order": "Various Artists",
        "performer_sort_order": "Regurgitator",
        "media_type": "CD",
        "original_release_time": "1999-07-05",
        "totaltracks": "18",
        "isrc": "AUWA09800180",
        "part_of_a_compilation": "1",
        "tags": [
            "Punk",
            "Electronic",
            "Rock",
            "Synthpop",
            "Pop",
            "Hard Rock",
            "Parody",
            "Big Beat",
            "Hip Hop"
        ]
    }
]
```

## song

* MINIMUM_API_VERSION=380001

returns a single song
@param array $input

|Input   |Type|Description|Optional|
|--------|----|-----------|-------:|
|'filter'|    |UID of Song, returns song JSON|NO      |

```JSON
[
    {
        "id": "77371",
        "title": "Welcome to Planet Sexor",
        "artist": {
            "id": "4144",
            "name": "Tiga"
        },
        "album": {
            "id": "51457",
            "name": "Sexor"
        },
        "filename": "\/mnt\/music\/Tiga\/(2005) Sexor\/101 - Welcome to Planet Sexor.mp3",
        "track": "1",
        "playlisttrack": "",
        "time": 50,
        "year": "2006",
        "bitrate": "192000",
        "rate": "44100",
        "mode": "cbr",
        "mime": "audio\/mpeg",
        "url": "https:\/\/music.com.au\/play\/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=77371&uid=2&player=api&name=Tiga%20-%20Welcome%20to%20Planet%20Sexor.mp3",
        "size": "1209827",
        "mbid": "936650f9-00e4-4476-accd-ccb5cf2c1d5b",
        "album_mbid": null,
        "artist_mbid": null,
        "albumartist_mbid": null,
        "art": "https:\/\/music.com.au\/image.php?object_id=51457&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg",
        "flag": 0,
        "preciserating": 1,
        "rating": 1,
        "averagerating": 0,
        "composer": "",
        "channels": null,
        "comment": "",
        "publisher": "Play It Again Sam; Different Recordings",
        "language": "",
        "replaygain_album_gain": "0.000000",
        "replaygain_album_peak": "0.000000",
        "replaygain_track_gain": "-5.270000",
        "replaygain_track_peak": "1.000000",
        "encoding": "UTF-8",
        "disk": "1",
        "totaldisks": "1",
        "band": "Tiga",
        "release_type": "album",
        "barcode": "5413356594027",
        "audio_codec": "mp3",
        "recording_time": "2006-02-06",
        "bpm": "114",
        "album_artist_sort_order": "Tiga",
        "performer_sort_order": "Tiga",
        "media_type": "CD",
        "original_release_time": "2005-12",
        "totaltracks": "14",
        "track_number": "1",
        "isrc": "BEP010500070",
        "tagging_time": "2013-07-24T07:48:29",
        "tags": [
            "Electronic"
        ]
    }
]
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

```JSON
[
    {
        "id": "2002",
        "name": "lachlanradio",
        "owner": "System",
        "items": "12630",
        "type": "private"
    },
    {
        "id": "2069",
        "name": "Hudson",
        "owner": "user",
        "items": "19",
        "type": "public"
    },
    {
        "id": "1994",
        "name": "nyssa mixed",
        "owner": "nyssa",
        "items": "3112",
        "type": "private"
    },
    {
        "id": "19",
        "name": "nyssaRadio",
        "owner": "nyssa",
        "items": "4370",
        "type": "private"
    },
    {
        "id": "14",
        "name": "Rebel Radio mkIII",
        "owner": "user",
        "items": "11384",
        "type": "private"
    }
]
```

## playlist

* MINIMUM_API_VERSION=380001

This returns a single playlist
@param array $input

|Input   |Type|Description|Optional|
|--------|----|-----------|-------:|
|'filter'|    |UID of playlist, returns playlist JSON|NO      |

```JSON
[
    {
        "id": "2069",
        "name": "Hudson",
        "owner": "user",
        "items": "19",
        "type": "public"
    }
]

```

## playlist_songs

* MINIMUM_API_VERSION=380001

This returns the songs for a playlist
@param array $input

|Input   |Type|Description|Optional|
|--------|----|-----------|-------:|
|'filter'|    |UID of Playlist, returns song JSON|NO      |
|'offset'|    |           |YES     |
|'limit' |    |           |YES     |

```JSON
[
    {
        "id": "131825",
        "title": "Warrior's Dance",
        "artist": {
            "id": "605",
            "name": "The Prodigy"
        },
        "album": {
            "id": "54185",
            "name": "Invaders Must Die"
        },
        "filename": "\/mnt\/music\/The Prodigy\/(2009) Invaders Must Die [VICP-64654]\/106 - Warrior's Dance.mp3",
        "track": "6",
        "playlisttrack": "1",
        "time": 312,
        "year": "2009",
        "bitrate": "213399",
        "rate": "44100",
        "mode": "vbr",
        "mime": "audio\/mpeg",
        "url": "https:\/\/music.com.au\/play\/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=131825&uid=4&player=api&name=The%20Prodigy%20-%20Warrior-s%20Dance.mp3",
        "size": "8353462",
        "mbid": "fe5a81c7-16e9-49f5-855f-3695e2815563",
        "album_mbid": null,
        "artist_mbid": null,
        "albumartist_mbid": null,
        "art": "https:\/\/music.com.au\/image.php?object_id=54185&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "composer": "Anthony Srock",
        "channels": null,
        "comment": "Limited Edition",
        "publisher": "Victor",
        "language": "eng",
        "replaygain_album_gain": "0.000000",
        "replaygain_album_peak": "0.000000",
        "replaygain_track_gain": "-9.170000",
        "replaygain_track_peak": "1.000000",
        "encoding": "UTF-8",
        "disk": "1",
        "totaldisks": "1",
        "band": "The Prodigy",
        "release_type": "album",
        "barcode": "4988002565320",
        "audio_codec": "mp3",
        "recording_time": "2009-02-18",
        "bpm": "68",
        "lyricist": "Anthony Srock; Jeff Mills; Bridgett Grace; Liam Howlett",
        "performer_sort_order": "The Prodigy",
        "album_artist_sort_order": "The Prodigy",
        "media_type": "CD",
        "original_release_time": "2009-02-18",
        "involved_people_list": "producer",
        "isrc": "GBCEJ0800391",
        "totaltracks": "13",
        "tags": [
            "Big Beat"
        ]
    },
    {
        "id": "156980",
        "title": "Inhuman (Combichrist remix)",
        "artist": {
            "id": "961",
            "name": "Aesthetic Perfection"
        },
        "album": {
            "id": "51489",
            "name": "Inhuman"
        },
        "filename": "\/mnt\/music\/Aesthetic Perfection\/(2011) Inhuman [OUT 517]\/102 - Inhuman (Combichrist remix).mp3",
        "track": "2",
        "playlisttrack": "2",
        "time": 286,
        "year": "2011",
        "bitrate": "192000",
        "rate": "44100",
        "mode": "cbr",
        "mime": "audio\/mpeg",
        "url": "https:\/\/music.com.au\/play\/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=156980&uid=4&player=api&name=Aesthetic%20Perfection%20-%20Inhuman%20-Combichrist%20remix-.mp3",
        "size": "7748850",
        "mbid": "79b3b2a0-a016-43f5-ab61-5d001d982d15",
        "album_mbid": null,
        "artist_mbid": null,
        "albumartist_mbid": null,
        "art": "https:\/\/music.com.au\/image.php?object_id=51489&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "composer": "",
        "channels": null,
        "comment": "",
        "publisher": "Out of Line",
        "language": "",
        "replaygain_album_gain": "0.000000",
        "replaygain_album_peak": "0.000000",
        "replaygain_track_gain": "-7.740000",
        "replaygain_track_peak": "1.000000",
        "tags": [
            "Electronic",
            "Industrial",
            "EBM"
        ]
    },
    {
        "id": "176093",
        "title": "Electro Gypsy",
        "artist": {
            "id": "1248",
            "name": "Savlonic"
        },
        "album": {
            "id": "55338",
            "name": "Red"
        },
        "filename": "\/mnt\/music\/Savlonic\/(2014) Red\/101 - Electro Gypsy.mp3",
        "track": "1",
        "playlisttrack": "3",
        "time": 166,
        "year": "2014",
        "bitrate": "320000",
        "rate": "44100",
        "mode": "cbr",
        "mime": "audio\/mpeg",
        "url": "https:\/\/music.com.au\/play\/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=176093&uid=4&player=api&name=Savlonic%20-%20Electro%20Gypsy.mp3",
        "size": "6768371",
        "mbid": "93f750d9-86f9-40b4-aa9f-8d467220cad7",
        "album_mbid": null,
        "artist_mbid": null,
        "albumartist_mbid": null,
        "art": "https:\/\/music.com.au\/image.php?object_id=55338&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "composer": "",
        "channels": null,
        "comment": "",
        "publisher": "[no label]",
        "language": "eng",
        "replaygain_album_gain": "0.000000",
        "replaygain_album_peak": "0.000000",
        "replaygain_track_gain": "-6.580000",
        "replaygain_track_peak": "0.989000",
        "encoding": "UTF-8",
        "disk": "1",
        "totaldisks": "1",
        "band": "Savlonic",
        "release_type": "album",
        "audio_codec": "mp3",
        "recording_time": "2014-08-18",
        "bpm": "157",
        "album_artist_sort_order": "Savlonic",
        "performer_sort_order": "Savlonic",
        "media_type": "Digital Media",
        "original_release_time": "2014-08-18",
        "musician_credits_list": "vocals",
        "totaltracks": "13",
        "copyright_message": "(c) 2014 Weebl's Stuff Records",
        "tags": [
            "Electronic",
            "Comedy",
            "Dubstep"
        ]
    },
    {
        "id": "43639",
        "title": "Bread, Cheese, Bow and Arrow",
        "artist": {
            "id": "2352",
            "name": "Future of the Left"
        },
        "album": {
            "id": "50354",
            "name": "How to Stop Your Brain in an Accident"
        },
        "filename": "\/mnt\/music\/Future of the Left\/(2013) How to Stop Your Brain in an Accident\/101 - Bread, Cheese, Bow and Arrow.mp3",
        "track": "1",
        "playlisttrack": "4",
        "time": 235,
        "year": "2013",
        "bitrate": "320000",
        "rate": "44100",
        "mode": "cbr",
        "mime": "audio\/mpeg",
        "url": "https:\/\/music.com.au\/play\/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=43639&uid=4&player=api&name=Future%20of%20the%20Left%20-%20Bread-%20Cheese-%20Bow%20and%20Arrow.mp3",
        "size": "10130496",
        "mbid": "3c46c44e-38a5-4b7b-a89c-28956fa39f02",
        "album_mbid": null,
        "artist_mbid": null,
        "albumartist_mbid": null,
        "art": "https:\/\/music.com.au\/image.php?object_id=50354&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "composer": "",
        "channels": null,
        "comment": "",
        "publisher": "prescriptions",
        "language": "",
        "replaygain_album_gain": "0.000000",
        "replaygain_album_peak": "0.000000",
        "replaygain_track_gain": "-9.910000",
        "replaygain_track_peak": "1.000000",
        "encoding": "UTF-8",
        "disk": "1",
        "totaldisks": "1",
        "band": "Future of the Left",
        "release_type": "album",
        "barcode": "5053760004691",
        "audio_codec": "mp3",
        "recording_time": "2013-10-28",
        "bpm": "96",
        "performer_sort_order": "Future of the Left",
        "album_artist_sort_order": "Future of the Left",
        "media_type": "CD",
        "original_release_time": "2013-10-01",
        "tagging_time": "2015-04-22T00:49:26",
        "totaltracks": "14",
        "tags": [
            "Rock"
        ]
    },
    {
        "id": "28159",
        "title": "Headbanger",
        "artist": {
            "id": "1045",
            "name": "BAK XIII"
        },
        "album": {
            "id": "49820",
            "name": "In Omnia Paratus"
        },
        "filename": "\/mnt\/music\/BAK XIII\/(2013) In Omnia Paratus\/109 - Headbanger.mp3",
        "track": "9",
        "playlisttrack": "5",
        "time": 205,
        "year": "2013",
        "bitrate": "192000",
        "rate": "44100",
        "mode": "cbr",
        "mime": "audio\/mpeg",
        "url": "https:\/\/music.com.au\/play\/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=28159&uid=4&player=api&name=BAK%20XIII%20-%20Headbanger.mp3",
        "size": "5208472",
        "mbid": "0cb70cdf-cb10-44f9-bb58-1804154d2a1b",
        "album_mbid": null,
        "artist_mbid": null,
        "albumartist_mbid": null,
        "art": "https:\/\/music.com.au\/image.php?object_id=49820&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "composer": "",
        "channels": null,
        "comment": "",
        "publisher": "Urgence Disk Records",
        "language": "",
        "replaygain_album_gain": "0.000000",
        "replaygain_album_peak": "0.000000",
        "replaygain_track_gain": "-11.420000",
        "replaygain_track_peak": "1.000000",
        "encoding": "UTF-8",
        "disk": "1",
        "totaldisks": "1",
        "band": "BAK XIII",
        "release_type": "album",
        "audio_codec": "mp3",
        "recording_time": "2013-11-24",
        "bpm": "129",
        "performer_sort_order": "BAK XIII",
        "album_artist_sort_order": "BAK XIII",
        "original_release_time": "2013-11-24",
        "media_type": "CD",
        "tagging_time": "2014-09-02T02:44:50",
        "url_user": "www.mp3.com",
        "totaltracks": "14",
        "tags": [
            "Electronic",
            "New Wave",
            "EBM"
        ]
    }
]
```

## playlist_create

* MINIMUM_API_VERSION=380001

This create a new playlist and return it
@param array $input

|Input |Type|Description|Optional|
|------|----|-----------|-------:|
|'name'|    |Playlist name|NO      |
|'type'|    |Playlist type 'public', 'private'|YES     |

```JSON
TBC
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

```JSON
TBC
```

## playlist_delete

* MINIMUM_API_VERSION=380001

This deletes a playlist
@param array $input

|Input   |Type|Description|Optional|
|--------|----|-----------|-------:|
|'filter'|    |UID of Playlist|NO      |

```JSON
TBC
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

```JSON
TBC
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

```JSON
TBC
```

## playlist_generate

* MINIMUM_API_VERSION=400001
* CHANGED_IN_API_VERSION=400002

Get a list of song JSON, indexes or id's based on some simple search criteria
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
```JSON
[
    {
        "id": "823699",
        "title": "I Robot",
        "artist": {
            "id": "9581",
            "name": "Alan Parsons Project"
        },
        "album": {
            "id": "64373",
            "name": "Master Hits"
        },
        "filename": "\/mnt\/music\/The Alan Parsons Project\/(1999) Master Hits\/101 - I Robot.mp3",
        "track": "1",
        "playlisttrack": "",
        "time": 362,
        "year": "1999",
        "bitrate": "320000",
        "rate": "44100",
        "mode": "cbr",
        "mime": "audio\/mpeg",
        "url": "https:\/\/music.com.au\/play\/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=823699&uid=3&player=api&name=Alan%20Parsons%20Project%20-%20I%20Robot.mp3",
        "size": "14544103",
        "mbid": "d574946b-b1b0-4f27-a90e-1273bb3b3075",
        "album_mbid": null,
        "artist_mbid": null,
        "albumartist_mbid": null,
        "art": "https:\/\/music.com.au\/image.php?object_id=64373&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "composer": "Alan Parsons",
        "channels": null,
        "comment": "",
        "publisher": "",
        "language": "zxx",
        "replaygain_album_gain": "0.000000",
        "replaygain_album_peak": "0.000000",
        "replaygain_track_gain": "-5.000000",
        "replaygain_track_peak": "1.000000",
        "tags": [
            "Rock"
        ]
    },
    {
        "id": "775247",
        "title": "Daybreaker",
        "artist": {
            "id": "10421",
            "name": "Electric Light Orchestra"
        },
        "album": {
            "id": "58107",
            "name": "On the Third Day"
        },
        "filename": "\/mnt\/music\/Electric Light Orchestra\/(1973) On the Third Day [JETLP 202]\/106 - Daybreaker.mp3",
        "track": "6",
        "playlisttrack": "",
        "time": 230,
        "year": "1973",
        "bitrate": "320036",
        "rate": "44100",
        "mode": "vbr",
        "mime": "audio\/mpeg",
        "url": "https:\/\/music.com.au\/play\/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=775247&uid=3&player=api&name=Electric%20Light%20Orchestra%20-%20Daybreaker.mp3",
        "size": "9231717",
        "mbid": "a827c29f-9b7f-43a3-88f3-91759077e0b2",
        "album_mbid": null,
        "artist_mbid": null,
        "albumartist_mbid": null,
        "art": "https:\/\/music.com.au\/image.php?object_id=58107&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "composer": "Jeff Lynne",
        "channels": null,
        "comment": "",
        "publisher": "",
        "language": "",
        "replaygain_album_gain": "0.000000",
        "replaygain_album_peak": "0.000000",
        "replaygain_track_gain": "-4.220000",
        "replaygain_track_peak": "0.944000",
        "tags": [
            "Rock",
            "Pop",
            "Prog Rock",
            "Symphonic Rock"
        ]
    },
    {
        "id": "181734",
        "title": "Cascade Leviathan",
        "artist": {
            "id": "9087",
            "name": "Lock Up"
        },
        "album": {
            "id": "57312",
            "name": "Violent Reprisal"
        },
        "filename": "\/mnt\/music\/Lock Up\/(2007) Violent Reprisal\/114 - Cascade Leviathan.mp3",
        "track": "14",
        "playlisttrack": "",
        "time": 162,
        "year": "2007",
        "bitrate": "320000",
        "rate": "44100",
        "mode": "cbr",
        "mime": "audio\/mpeg",
        "url": "https:\/\/music.com.au\/play\/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=181734&uid=3&player=api&name=Lock%20Up%20-%20Cascade%20Leviathan.mp3",
        "size": "6534820",
        "mbid": "2909448b-ccb2-48ec-a36a-b0adb6d5dff2",
        "album_mbid": null,
        "artist_mbid": null,
        "albumartist_mbid": null,
        "art": "https:\/\/music.com.au\/image.php?object_id=57312&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "composer": "",
        "channels": null,
        "comment": "",
        "publisher": "Feto Records",
        "language": "",
        "replaygain_album_gain": "0.000000",
        "replaygain_album_peak": "0.000000",
        "replaygain_track_gain": "-9.060000",
        "replaygain_track_peak": "1.000000",
        "tags": [
            "Death Metal"
        ]
    },
    {
        "id": "857352",
        "title": "\u30ea\u30dc\u30f3\u306e\u9a0e\u58eb",
        "artist": {
            "id": "9272",
            "name": "Jun Togawa with Vampillia"
        },
        "album": {
            "id": "67132",
            "name": "\u662d\u548c\u4eab\u5e74"
        },
        "filename": "\/mnt\/music\/Jun Togawa\/(2012) \u662d\u548c\u4eab\u5e74 [TECH-20317]\/105 - \u30ea\u30dc\u30f3\u306e\u9a0e\u58eb.mp3",
        "track": "5",
        "playlisttrack": "",
        "time": 135,
        "year": "2012",
        "bitrate": "320000",
        "rate": "44100",
        "mode": "cbr",
        "mime": "audio\/mpeg",
        "url": "https:\/\/music.com.au\/play\/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=857352&uid=3&player=api&name=Jun%20Togawa%20with%20Vampillia%20-%20-.mp3",
        "size": "5460095",
        "mbid": "1e2d1466-137c-4631-ab3d-085e5e9ddf81",
        "album_mbid": null,
        "artist_mbid": null,
        "albumartist_mbid": null,
        "art": "https:\/\/music.com.au\/image.php?object_id=67132&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "composer": "",
        "channels": null,
        "comment": "",
        "publisher": "Teichiku Records",
        "language": "",
        "replaygain_album_gain": "0.000000",
        "replaygain_album_peak": "0.000000",
        "replaygain_track_gain": "-8.030000",
        "replaygain_track_peak": "1.000000",
        "tags": []
    }
]

```

INDEX
```JSON
[
    {
        "id": "91413",
        "title": "The Core (Instrumental)",
        "artist": {
            "id": "5744",
            "name": "Avery Watts"
        },
        "album": {
            "id": "52339",
            "name": "Voiceless: Vol. 1"
        },
        "filename": "\/mnt\/music\/Avery Watts\/(2011) Voiceless: Vol. 1 [PR007-DG]\/106 - The Core (Instrumental).mp3",
        "track": "6",
        "playlisttrack": "",
        "time": 282,
        "year": "2011",
        "bitrate": "256000",
        "rate": "44100",
        "mode": "cbr",
        "mime": "audio\/mpeg",
        "url": "https:\/\/music.com.au\/play\/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=91413&uid=3&player=api&name=Avery%20Watts%20-%20The%20Core%20-Instrumental-.mp3",
        "size": "9191924",
        "mbid": "914f5408-80d4-4106-86f0-2b58367ac2bf",
        "album_mbid": null,
        "artist_mbid": null,
        "albumartist_mbid": null,
        "art": "https:\/\/music.com.au\/image.php?object_id=52339&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "composer": "",
        "channels": null,
        "comment": "",
        "publisher": "Pulse Records",
        "language": "",
        "replaygain_album_gain": "0.000000",
        "replaygain_album_peak": "0.000000",
        "replaygain_track_gain": "-10.420000",
        "replaygain_track_peak": "1.000000",
        "tags": [
            "Instrumental"
        ]
    },
    {
        "id": "180473",
        "title": "Mommy, Can I Go Out and Kill Tonight?",
        "artist": {
            "id": "9048",
            "name": "Misfits"
        },
        "album": {
            "id": "57206",
            "name": "Earth A.D."
        },
        "filename": "\/mnt\/music\/Misfits\/(1983) Earth A.D. [PL9-CD 02_3]\/106 - Mommy, Can I Go Out and Kill Tonight?.mp3",
        "track": "6",
        "playlisttrack": "",
        "time": 123,
        "year": "1996",
        "bitrate": "320000",
        "rate": "44100",
        "mode": "cbr",
        "mime": "audio\/mpeg",
        "url": "https:\/\/music.com.au\/play\/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=180473&uid=3&player=api&name=Misfits%20-%20Mommy-%20Can%20I%20Go%20Out%20and%20Kill%20Tonight-.mp3",
        "size": "5094407",
        "mbid": "d9b68757-273c-494a-a215-f5556e903174",
        "album_mbid": null,
        "artist_mbid": null,
        "albumartist_mbid": null,
        "art": "https:\/\/music.com.au\/image.php?object_id=57206&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "composer": "",
        "channels": null,
        "comment": "",
        "publisher": "Caroline Records",
        "language": "",
        "replaygain_album_gain": "0.000000",
        "replaygain_album_peak": "0.000000",
        "replaygain_track_gain": "-0.840000",
        "replaygain_track_peak": "0.759000",
        "tags": [
            "Horror Punk"
        ]
    },
    {
        "id": "869803",
        "title": "Coming Down",
        "artist": {
            "id": "13130",
            "name": "Five Finger Death Punch"
        },
        "album": {
            "id": "68231",
            "name": "American Capitalist"
        },
        "filename": "\/mnt\/music\/Five Finger Death Punch\/(2011) American Capitalist [PPK 014]\/104 - Coming Down.flac",
        "track": "4",
        "playlisttrack": "",
        "time": 241,
        "year": "2011",
        "bitrate": "1061073",
        "rate": "44100",
        "mode": null,
        "mime": "audio\/x-flac",
        "url": "https:\/\/music.com.au\/play\/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=869803&uid=3&player=api&name=Five%20Finger%20Death%20Punch%20-%20Coming%20Down.mp3",
        "size": "31994894",
        "mbid": "16a19baa-f8c3-4a69-807c-bd99e0fe02fc",
        "album_mbid": null,
        "artist_mbid": null,
        "albumartist_mbid": null,
        "art": "https:\/\/music.com.au\/image.php?object_id=68231&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "composer": "Ivan Moody",
        "channels": null,
        "comment": "Track 4",
        "publisher": "",
        "language": "eng",
        "replaygain_album_gain": "0.000000",
        "replaygain_album_peak": "0.000000",
        "replaygain_track_gain": "0.000000",
        "replaygain_track_peak": "0.000000",
        "tags": [
            "Nu Metal"
        ]
    },
    {
        "id": "91830",
        "title": "Lament",
        "artist": {
            "id": "5747",
            "name": "King Crimson"
        },
        "album": {
            "id": "16267",
            "name": "The Road to Red"
        },
        "filename": "\/mnt\/music\/King Crimson\/(1974) The Road to Red [KCCBX7]\/702 - Lament.mp3",
        "track": "2",
        "playlisttrack": "",
        "time": 265,
        "year": "2013",
        "bitrate": "320000",
        "rate": "44100",
        "mode": "cbr",
        "mime": "audio\/mpeg",
        "url": "https:\/\/music.com.au\/play\/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=91830&uid=3&player=api&name=King%20Crimson%20-%20Lament.mp3",
        "size": "10619257",
        "mbid": "8231ac0f-1587-4b6f-b5e4-024f8def1cc9",
        "album_mbid": null,
        "artist_mbid": null,
        "albumartist_mbid": null,
        "art": "https:\/\/music.com.au\/image.php?object_id=16267&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "composer": "",
        "channels": null,
        "comment": "ExactAudioCopy v1.0b3",
        "publisher": "Discipline Global Mobile",
        "language": "",
        "replaygain_album_gain": "0.000000",
        "replaygain_album_peak": "0.000000",
        "replaygain_track_gain": "-6.340000",
        "replaygain_track_peak": "0.923000",
        "tags": [
            "Progressive Rock"
        ]
    }
]

```

ID
```JSON
[
    {
        "id": "764398",
        "title": "Even Terminators Can Cry",
        "artist": {
            "id": "10067",
            "name": "The Morganatics"
        },
        "album": {
            "id": "60075",
            "name": "We Come From the Stars"
        },
        "filename": "\/mnt\/music\/The Morganatics\/(2015) We Come From the Stars\/103 - Even Terminators Can Cry.mp3",
        "track": "3",
        "playlisttrack": "",
        "time": 347,
        "year": "2015",
        "bitrate": "320000",
        "rate": "44100",
        "mode": "cbr",
        "mime": "audio\/mpeg",
        "url": "https:\/\/music.com.au\/play\/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=764398&uid=3&player=api&name=The%20Morganatics%20-%20Even%20Terminators%20Can%20Cry.mp3",
        "size": "13953433",
        "mbid": "5b6f8f99-f8ff-4586-9966-03107d49edd3",
        "album_mbid": null,
        "artist_mbid": null,
        "albumartist_mbid": null,
        "art": "https:\/\/music.com.au\/image.php?object_id=60075&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "composer": "",
        "channels": null,
        "comment": "",
        "publisher": "",
        "language": "",
        "replaygain_album_gain": "0.000000",
        "replaygain_album_peak": "0.000000",
        "replaygain_track_gain": "-10.720000",
        "replaygain_track_peak": "1.000000",
        "tags": [
            "Alternative Rock"
        ]
    },
    {
        "id": "774255",
        "title": "\u30ca\u30f3\u30d0\u30fc\u30bc\u30ed",
        "artist": {
            "id": "10390",
            "name": "nano.RIPE"
        },
        "album": {
            "id": "60962",
            "name": "\u30d7\u30e9\u30b9\u3068\u30de\u30a4\u30ca\u30b9\u306e\u3057\u304f\u307f"
        },
        "filename": "\/mnt\/music\/nano.RIPE\/(2012) \u30d7\u30e9\u30b9\u3068\u30de\u30a4\u30ca\u30b9\u306e\u3057\u304f\u307f [LACA-15237]\/106 - \u30ca\u30f3\u30d0\u30fc\u30bc\u30ed.mp3",
        "track": "6",
        "playlisttrack": "",
        "time": 256,
        "year": "2012",
        "bitrate": "320000",
        "rate": "44100",
        "mode": "cbr",
        "mime": "audio\/mpeg",
        "url": "https:\/\/music.com.au\/play\/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=774255&uid=3&player=api&name=nano.RIPE%20-%20-.mp3",
        "size": "10292138",
        "mbid": "17a63806-13ed-450f-bb34-ba779ddeef28",
        "album_mbid": null,
        "artist_mbid": null,
        "albumartist_mbid": null,
        "art": "https:\/\/music.com.au\/image.php?object_id=60962&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "composer": "",
        "channels": null,
        "comment": "",
        "publisher": "Lantis",
        "language": "",
        "replaygain_album_gain": "0.000000",
        "replaygain_album_peak": "0.000000",
        "replaygain_track_gain": "-13.460000",
        "replaygain_track_peak": "1.000000",
        "tags": [
            "J-pop"
        ]
    },
    {
        "id": "80399",
        "title": "Ben Wah Balls",
        "artist": {
            "id": "4306",
            "name": "blink-182"
        },
        "album": {
            "id": "51663",
            "name": "Cheshire Cat"
        },
        "filename": "\/mnt\/music\/blink-182\/(1994) Cheshire Cat\/114 - Ben Wah Balls.mp3",
        "track": "14",
        "playlisttrack": "",
        "time": 235,
        "year": "1998",
        "bitrate": "128000",
        "rate": "44100",
        "mode": "cbr",
        "mime": "audio\/mpeg",
        "url": "https:\/\/music.com.au\/play\/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=80399&uid=3&player=api&name=blink-182%20-%20Ben%20Wah%20Balls.mp3",
        "size": "3775052",
        "mbid": "d9dd473a-5774-406d-a375-2fafefe9e976",
        "album_mbid": null,
        "artist_mbid": null,
        "albumartist_mbid": null,
        "art": "https:\/\/music.com.au\/image.php?object_id=51663&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "composer": "",
        "channels": null,
        "comment": "",
        "publisher": "Cargo Music",
        "language": "",
        "replaygain_album_gain": "0.000000",
        "replaygain_album_peak": "0.000000",
        "replaygain_track_gain": "-3.690000",
        "replaygain_track_peak": "0.955000",
        "tags": [
            "Pop Punk"
        ]
    },
    {
        "id": "82315",
        "title": "Soul-Crusher",
        "artist": {
            "id": "153",
            "name": "White Zombie"
        },
        "album": {
            "id": "51799",
            "name": "La Sexorcisto: Devil Music Vol. 1"
        },
        "filename": "\/mnt\/music\/White Zombie\/(1992) La Sexorcisto: Devil Music Vol. 1\/105 - Soul-Crusher.mp3",
        "track": "5",
        "playlisttrack": "",
        "time": 304,
        "year": "1992",
        "bitrate": "192000",
        "rate": "44100",
        "mode": "cbr",
        "mime": "audio\/mpeg",
        "url": "https:\/\/music.com.au\/play\/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=82315&uid=3&player=api&name=White%20Zombie%20-%20Soul-Crusher.mp3",
        "size": "7307433",
        "mbid": "c722255e-f4d6-4c77-a275-90682db5f38b",
        "album_mbid": null,
        "artist_mbid": null,
        "albumartist_mbid": null,
        "art": "https:\/\/music.com.au\/image.php?object_id=51799&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "composer": "",
        "channels": null,
        "comment": "",
        "publisher": "MCA Records",
        "language": "",
        "replaygain_album_gain": "0.000000",
        "replaygain_album_peak": "0.000000",
        "replaygain_track_gain": "-3.950000",
        "replaygain_track_peak": "1.000000",
        "tags": [
            "Industrial Metal"
        ]
    }
]

```
## search_songs

* MINIMUM_API_VERSION=380001

This searches the songs and returns... songs
@param array $input

|Input   |Type|Description|Optional|
|--------|----|-----------|-------:|
|'filter'|    |Value is Alpha Match for Song Title, Artist Name, Album Name, Genre Name returns song JSON|NO      |
|'offset'|    |           |YES     |
|'limit' |    |           |YES     |

```JSON
[
    {
        "id": "16775",
        "title": "Who U Foolin",
        "artist": {
            "id": "605",
            "name": "The Prodigy"
        },
        "album": {
            "id": "49370",
            "name": "Hotride"
        },
        "filename": "\/mnt\/music\/The Prodigy\/(2004) Hotride\/102 - Who U Foolin.mp3",
        "track": "2",
        "playlisttrack": "",
        "time": 220,
        "year": "2004",
        "bitrate": "202932",
        "rate": "44100",
        "mode": "vbr",
        "mime": "audio\/mpeg",
        "url": "https:\/\/music.com.au\/play\/index.php?ssid=eeb9f1b6056246a7d563f479f518bb34&type=song&oid=16775&uid=4&player=api&name=The%20Prodigy%20-%20Who%20U%20Foolin.mp3",
        "size": "5594186",
        "mbid": "37131e8a-8e45-4980-8f8f-04ae9658aaa6",
        "album_mbid": null,
        "artist_mbid": null,
        "albumartist_mbid": null,
        "art": "https:\/\/music.com.au\/image.php?object_id=49370&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34&name=art.jpg",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "composer": "The Prodigy",
        "channels": null,
        "comment": "single",
        "publisher": "XL Recordings",
        "language": "",
        "replaygain_album_gain": "0.000000",
        "replaygain_album_peak": "0.000000",
        "replaygain_track_gain": "-8.660000",
        "replaygain_track_peak": "1.000000",
        "encoding": "UTF-8",
        "disk": "1",
        "totaldisks": "1",
        "band": "The Prodigy",
        "release_type": "single",
        "barcode": "634904120221",
        "audio_codec": "mp3",
        "recording_time": "2004-11-01",
        "bpm": "126",
        "album_artist_sort_order": "Prodigy, The",
        "performer_sort_order": "Prodigy, The",
        "media_type": "CD",
        "original_release_time": "2004-11-01",
        "totaltracks": "4",
        "tags": [
            "Electronic"
        ]
    }
]
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

```JSON
TBC
```

## video

* MINIMUM_API_VERSION=380001

This returns a single video
@param array $input

|Input   |Type|Description|Optional|
|--------|----|-----------|-------:|
|'filter'|    |UID of video, returns video JSON|NO      |

```JSON
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
```JSON
TBC
```

ARTIST
```JSON
[
    {
        "id": "6995",
        "name": "Dr. Baker",
        "tags": "{\n    \"id\": 9,\n    \"count\": 1,\n    \"name\": \"Industrial\"\n}",
        "albums": "1",
        "songs": "1",
        "art": "https:\/\/music.com.au\/image.php?object_id=6995&object_type=artist&auth=eeb9f1b6056246a7d563f479f518bb34",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "mbid": "5907dd10-6d40-4615-9682-f49f53f020a2",
        "summary": " ",
        "yearformed": "0",
        "placeformed": ""
    },
    {
        "id": "383",
        "name": "Ultravox",
        "tags": "{\n    \"id\": 532,\n    \"count\": 1,\n    \"name\": \"Symphonic Rock\"\n}",
        "albums": "1",
        "songs": "4",
        "art": "https:\/\/music.com.au\/image.php?object_id=383&object_type=artist&auth=eeb9f1b6056246a7d563f479f518bb34",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "mbid": null,
        "summary": "Ultravox (formerly Ultravox!) have been one of the primary exponents of the British new wave synthpop music movement since the late 70s. The band is particularly associated with the New Romantic scene, although it both pre- and post-dated the peak of that movement by several years. Known for popular hits such as \"Dancing With Tears In My Eyes\" and \"Vienna\" among many others, the band has drawn inspiration variously from dark, moody post-punk, the artier side of glam rock, and latterly straightforward synthpop. ",
        "yearformed": "0",
        "placeformed": ""
    }
]
```

ALBUM
```JSON
[
    {
        "id": "64848",
        "name": "Foley Room Recorded Live in Brussels",
        "artist": {
            "id": "12548",
            "name": "Amon Tobin"
        },
        "year": "2008",
        "tracks": "1",
        "disk": "1",
        "tags": "[]",
        "art": "https:\/\/music.com.au\/image.php?object_id=64848&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "mbid": "2c7be6b7-bc1d-40fb-8430-a6f26e2defc2"
    },
    {
        "id": "67162",
        "name": "King of the Dudes",
        "artist": {
            "id": "13446",
            "name": "Sunflower Bean"
        },
        "year": "2019",
        "tracks": "4",
        "disk": "1",
        "tags": "{\n    \"id\": 36,\n    \"count\": 1,\n    \"name\": \"Indie Rock\"\n}",
        "art": "https:\/\/music.com.au\/image.php?object_id=67162&object_type=album&auth=eeb9f1b6056246a7d563f479f518bb34",
        "flag": 0,
        "preciserating": 0,
        "rating": 0,
        "averagerating": 0,
        "mbid": "12e4f0b5-9d09-40a5-bdd6-07f80bc67bd6"
    }
]
```

## user

* MINIMUM_API_VERSION=380001

This get an user public information
@param array $input

|Input     |Type|Description|Optional|
|----------|----|-----------|-------:|
|'username'|    |Username of the user for who to get details|NO      |

```JSON
{
    "user": {
        "id": "4",
        "username": "generic",
        "auth": "eeb9f1b6056246a7d563f479f518bb34",
        "email": "generic@gmail.email",
        "access": "25",
        "fullname_public": "0",
        "validation": null,
        "disabled": "0",
        "create_date": "1463308850",
        "last_seen": "1580890690",
        "website": null,
        "state": null,
        "city": null
    }
}

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

```JSON
{
    "success": {
        "message": "successfully created: temp_user"
    }
}
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

```JSON
{
    "success": {
        "message": "successfully updated: temp_user"
    }
}
```

## user_delete

* MINIMUM_API_VERSION=400001

Delete an existing user.
@param array $input

|Input     |Type|Description|Optional|
|----------|----|-----------|-------:|
|'username'|string|           |NO      |

```JSON
{
    "success": {
        "message": "successfully deleted: temp_user"
    }
}
```

## followers

* MINIMUM_API_VERSION=380001

This get an user followers
@param array $input

|Input     |Type|Description|Optional|
|----------|----|-----------|-------:|
|'username'|string|Username of the user for who to get followers list|NO      |

```JSON
[
    "tdawg"
]

```

## following

* MINIMUM_API_VERSION=380001

This get the user list followed by an user
@param array $input

|Input     |Type|Description|Optional|
|----------|----|-----------|-------:|
|'username'|string|(Username of the user for who to get following list|NO      |

```JSON
[
    "tdawg",
    "nyssa",
    "sam",
    "glen",
    "shaun",
    "jake"
]

```

## toggle_follow

* MINIMUM_API_VERSION=380001

This follow/unfollow an user
@param array $input

|Input     |Type|Description|Optional|
|----------|----|-----------|-------:|
|'username'|string|Username of the user to follow/unfollow|NO      |

```JSON
{
    "success": {
        "message": "follow toggled for: 4"
    }
}
```

## last_shouts

* MINIMUM_API_VERSION=380001

This get the latest posted shouts
@param array $input

|Input     |Type|Description|Optional|
|----------|----|-----------|-------:|
|'username'|    |Username of the user for who to get latest shouts|YES     |
|'limit'   |    |           |YES     |

```JSON
[
    {
        "id": "5",
        "date": "1572321464",
        "text": "good!",
        "username": "user"
    },
    {
        "id": "4",
        "date": "1569416407",
        "text": "not the right one?",
        "username": "user"
    }
]

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

```JSON
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

```JSON
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

```JSON
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

```JSON
{
    "success": {
        "message": "successfully scrobbled: 77371"
    }
}
```

## catalog_action

* MINIMUM_API_VERSION=400001

Kick off a catalog update or clean for the selected catalog
@param array $input

|Input    |Type   |Description                      |Optional|
|---------|-------|---------------------------------|-------:|
|'task'   |string |'add_to_catalog', 'clean_catalog'|NO      |
|'catalog'|integer|$catalog_id                      |NO      |

```JSON
{
    "success": {
        "message": "successfully started: clean_catalog"
    }
}
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

```JSON
{
    "timeline": [
        {
            "id": "162048",
            "data": "1578981580",
            "object_type": "song",
            "object_id": "85870",
            "action": "play",
            "username": "glen"
        },
        {
            "id": "162047",
            "data": "1578981353",
            "object_type": "song",
            "object_id": "85876",
            "action": "play",
            "username": "glen"
        },
        {
            "id": "162046",
            "data": "1578981066",
            "object_type": "song",
            "object_id": "85871",
            "action": "play",
            "username": "glen"
        },
        {
            "id": "162045",
            "data": "1578972224",
            "object_type": "song",
            "object_id": "85879",
            "action": "play",
            "username": "glen"
        },
        {
            "id": "162044",
            "data": "1578967637",
            "object_type": "song",
            "object_id": "85880",
            "action": "play",
            "username": "glen"
        }
    ]
}

```

## friends_timeline

* MINIMUM_API_VERSION=380001

This get current user friends timeline
@param array $input

|Input  |Type   |Description|Optional|
|-------|-------|-----------|-------:|
|'limit'|integer|           |YES     |
|'since'|integer|UNIXTIME() |NO      |

```JSON
{
    "timeline": [
        {
            "id": "162498",
            "data": "1580771285",
            "object_type": "song",
            "object_id": "896296",
            "action": "play",
            "username": "tom"
        },
        {
            "id": "162048",
            "data": "1578981580",
            "object_type": "song",
            "object_id": "85870",
            "action": "play",
            "username": "glen"
        },
        {
            "id": "162047",
            "data": "1578981353",
            "object_type": "song",
            "object_id": "85876",
            "action": "play",
            "username": "glen"
        }
    ]
}
```

## update_from_tags

* MINIMUM_API_VERSION=400001

Update a single album, artist, song from the tag data
@param array $input

|Input |Type   |Description                    |Optional|
|------|-------|-------------------------------|-------:|
|'type'|string |'artist', 'album', 'song'      |NO      |
|'id'  |integer|$artist_id, $album_id, $song_id|NO      |

```JSON
{
    "success": {
        "message": "Updated tags for: 54130 (album)"
    }
}
```

## update_artist_info

* MINIMUM_API_VERSION=400001

Update artist information and fetch similar artists from last.fm
Make sure lastfm_API_key is set in your configuration file
@param array $input

|Input    |Type   |Description                |Optional|
|---------|-------|---------------------------|-------:|
|'id'     |integer|$artist_id                 |NO      |

```JSON
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

```JSON
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

```JSON
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

```JSON
TBC
```
