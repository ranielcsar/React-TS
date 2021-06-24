import { useState, useEffect } from 'react'
import * as Location from 'expo-location'
import { Platform } from 'react-native'
import Constants from 'expo-constants'

const useLocation = () => {
  const [location, setLocation] = useState({} as Location.LocationObject)
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    const getLocation = async () => {
      if (Platform.OS === 'android' && !Constants.isDevice) {
        setErrorMsg(
          'Oops, this will not work on Snack in an Android emulator. Try it on your device!'
        )
        return
      }
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setErrorMsg('A permissão para utilizar a localização foi negada.')
        return
      }

      let location = await Location.getCurrentPositionAsync({})
      setLocation(location)
    }

    getLocation()
  }, [])

  return { location, errorMsg }
}

export default useLocation
