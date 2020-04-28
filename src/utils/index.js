import {getAlbums, getArtist} from "@/api/artist";
import {getSeveralAlbums} from "@/api/album";
import {getTracks} from "@/api/track";
import store from "@/store/index"

export const searchArtist = async (artistName) => {
  store.commit("setInput", artistName)
  try {
    const artist = await getArtist(artistName)
    await searchAlbums(artist.data.artists.items[0].id)
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
    await searchSeveralAlbums(totalAlbums.map(x => x.id))
  } catch (e) {
    throw new Error(e)
  }
}

const searchSeveralAlbums = async (albumsIds) => {
  let totalAlbums = []
  try {
    let begin = 0
    let end = 20
    while (end <= albumsIds.length) {
      const albums = await getSeveralAlbums(albumsIds.slice(begin, end))
      begin = end + 1
      end += 20
      totalAlbums.push(...albums.data.albums.map(album => album.tracks.items))
    }
    await getTrackPopularity(totalAlbums.map(album => album.map(track => track.id)).flat())
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
