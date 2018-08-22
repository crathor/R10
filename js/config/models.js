import Realm from 'realm'

const favesSchema = {
  name: 'Fave',
  primaryKey: 'id',
  properties: {
    id: 'string',
    faved_on: 'date'
  }
}

const realm = new Realm({ schema: [favesSchema] })

export const addToFaves = id => {
  realm.write(() => {
    realm.create('Fave', { id, faved_on: new Date() })
  })
}
export const removeFromFaves = id => {
  realm.write(() => {
    const fave = realm.objects('Fave').filtered(`id == ${id}`)
    realm.delete(fave)
  })
}

export const getFaves = () => {
  return realm.objects('Fave')
}

export default realm
