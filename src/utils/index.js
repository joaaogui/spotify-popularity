import {getAlbums, getArtist} from "@/api/artist";
import {getAlbumTracks} from "@/api/album";
import {getTrack} from "@/api/track";
// import store from "@/store/index"

export const searchArtist = async (artistName) => {
    try {
        const artist = await getArtist(artistName)
        searchAlbums(artist.data.artists.items[0].id)
    } catch (e) {
        throw new Error(e)
    }
}

const searchAlbums = async (artistId) => {
    try {
        const albums = await getAlbums(artistId)
        searchAlbumTracks(albums.data.items)
    } catch (e) {
        throw new Error(e)
    }
}

var alltracks = []
const searchAlbumTracks = async (albums) => {
    try {
        for (const album of albums) {
            const tracks = await getAlbumTracks(album.id)
            for(const track of tracks.data.items){
                alltracks.push(track)
            }
        }
        getTrackPopularity(alltracks)
    } catch (e) {
        throw new Error(e)
    }
}

var popularity = {}
const getTrackPopularity = async (tracks) => {
    try {
        console.log(tracks)
        for (const track of tracks) {
            const completeTrack = await getTrack(track.id)
            popularity[completeTrack.data.name] = completeTrack.data.popularity
        }
        console.log(popularity)
    } catch (e) {
        throw new Error(e)
    }
}
