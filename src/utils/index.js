import {getAlbums, getArtist} from "@/api/artist";
import {getAlbumTracks} from "@/api/album";
import {getTracks} from "@/api/track";
import store from "@/store/index"

export const searchArtist = async (artistName) => {
    try {
        const artist = await getArtist(artistName)
        searchAlbums(artist.data.artists.items[0].id)
    } catch (e) {
        throw new Error(e)
    }
}

const searchAlbums = async (artistId) => {
    let totalAlbums = []
    try {
        let offset = 0
        let albums = await getAlbums(artistId, offset)
        totalAlbums.push(...albums.data.items)
        while (albums.data.next !== null) {
            offset += 50
            albums = await getAlbums(artistId, offset)
            totalAlbums.push(...albums.data.items)
        }
        searchAlbumTracks(totalAlbums)
    } catch (e) {
        throw new Error(e)
    }
}

var alltracks = []
const searchAlbumTracks = async (albums) => {
    try {
        for (const album of albums) {
            const tracks = await getAlbumTracks(album.id)
            for (const track of tracks.data.items) {
                alltracks.push(track)
            }
        }
        let tracksIds = alltracks.map(x => x.id)
        getTrackPopularity(tracksIds)
    } catch (e) {
        throw new Error(e)
    }
}

const getTrackPopularity = async (tracks) => {
    let totalTracks = []
    try {
        let begin = 0
        let end = 50
        while (end <= tracks.length + 50) {
            const completeTracks = await getTracks(tracks.slice(begin, end))
            begin = end + 1
            end += 50
            totalTracks.push(...completeTracks.data.tracks)
        }
        store.commit("setTracks", totalTracks.sort((a, b) => (a.popularity < b.popularity) ? 1 : -1))

    } catch (e) {
        throw new Error(e)
    }
}
