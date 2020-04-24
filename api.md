# Ampache's XML (& JSON!) API

## General Info

**Compatible Versions:** _>= 350001_

Ampache Provides an API for pulling out it's meta data in the form of simple XML documents. T&amp;&amp;s was originally created for use by [Amarok](http://amarok.kde.org/), but there is no reason it couldn't be used to create other front-ends to the Ampache data.

Access to the API is controlled by the Internal [Access Control Lists](https://github.com/ampache/ampache/wiki/ACL). The KEY defined in the ACL is the passphrase that must be used to establish an API session. By default requests are limited to a maximum of 5000 results for performance reasons. To get additional results pass offset as an additional parameter.

If you have any questions or requests for this API please submit a [Feature Request](https://github.com/ampache/ampache/issues?q=is%3Aopen). All dates in the API calls should be passed as [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) dates.

## Current Version

* Master 400004
* Develop 400005

## Sending Handshake a Request

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
http://localhost/ampache/server/xml.server.php?action=handshake&auth=PASSPHRASE&timestamp=TIME&version=350001&user=USER
```

### Api Key

The key that must be passed to Ampache is the API Key generated for a specific user (none by default, only the administrator can generate one). Then call the following URL (localhost/ampache is the location of your Ampache installation):

```Text
http://localhost/ampache/server/xml.server.php?action=handshake&auth=API_KEY&version=350001
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

All future interactions with the Ampache API must include the `AUTHENTICATION_TOKEN` as a `GET` variable named `auth`.

For XML
```XML
<?xml version="1.0" encoding="UTF-8" ?>
<root>
    <auth><AUTHENTICATION_TOKEN></auth>
    <api><API_VERSION></api>
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

For JSON
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

## Errors

All errors will be returned as an XML document as specified in the [API Error Document](#api-errors). When possible the text part of the message will be translated into the users configured language.

## Class Methods

All methods must be passed as `action=METHODNAME`. All methods except the `handshake` can take an optional `offset=XXX` and `limit=XXX`. The limit determines the maximum number of results returned. The offset will tell Ampache where to start in the result set. For example if there are 100 total results and you set the offset to 50, and the limit to 50 Ampache will return results between 50 and 100. The default limit is 5000. The default offset is 0.

You can also pass it `limit=none` to overcome the `limit` limitation and return **all** the matching elements.

For more in depth information regarding the different api servers you can view the following documentation pages.

* [XML Documentation](http://ampache.org/api-xml.html) page.
* [JSON Documentation](http://ampache.org/api-json.html) page.

### Non-Data Methods

* handshake
* ping
* goodbye (MINIMUM_API_VERSION=400001)
* url_to_song
* check_parameter (MINIMUM_API_VERSION=400001)

### Data Methods

* get_indexes (MINIMUM_API_VERSION=400001)
* artists
* artist
* artist_songs
* artist_albums
* albums
* album
* album_songs
* tags
* tag
* tag_artists
* tag_albums
* tag_songs
* songs
* song
* advanced_search (CHANGED_IN_API_VERSION=400001)
* stats (Changed in 400001 `filter` added)
* playlists
* playlist
* playlist_songs
* playlist_create
* playlist_edit (MINIMUM_API_VERSION=400001)
* playlist_delete
* playlist_add_song (CHANGED_IN_API_VERSION=400001)
* playlist_remove_song (CHANGED_IN_API_VERSION=400001)
* playlist_generate (MINIMUM_API_VERSION=400001)
* search_songs
* videos
* video
* user
* user_create (MINIMUM_API_VERSION=400001)
* user_update (MINIMUM_API_VERSION=400001)
* user_delete (MINIMUM_API_VERSION=400001)
* stream (MINIMUM_API_VERSION=400001)
* download (MINIMUM_API_VERSION=400001)
* get_art (MINIMUM_API_VERSION=400001)
* rate
* flag (MINIMUM_API_VERSION=400001)
* record_play (MINIMUM_API_VERSION=400001)
* scrobble (MINIMUM_API_VERSION=400001)
* followers
* following
* toggle_follow
* last_shouts
* timeline
* friends_timeline
* catalog_action (MINIMUM_API_VERSION=400001)
* update_from_tags (MINIMUM_API_VERSION=400001)
* update_artist_info (MINIMUM_API_VERSION=400001)
* update_art (MINIMUM_API_VERSION=400001)

### Control Methods

* localplay
* democratic

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

## Request URL Examples

For the purpose of this example the Ampache host is 'localhost' and the path to Ampache is /ampache

### Requesting all genres whose name starts with Rock

XML
```
http://localhost/ampache/server/xml.server.php?action=tags&auth=1234567890123456789012345678901&filter=Rock
```

JSON
```
http://localhost/ampache/server/json.server.php?action=tags&auth=1234567890123456789012345678901&filter=Rock
```

### Requesting all song titles, with an offset of 5000

XML
```
http://localhost/ampache/server/xml.server.php?action=songs&auth=12345678901234567890123456789012&offset=5000
```

JSON
```
http://localhost/ampache/server/json.server.php?action=songs&auth=12345678901234567890123456789012&offset=5000
```