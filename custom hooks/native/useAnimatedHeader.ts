import { useEffect, useRef, useState } from 'react'
import { Animated } from 'react-native'

export const H_MAX_HEIGHT = 320
export const H_MIN_HEIGHT = 120
const H_SCROLL_DISTANCE = H_MAX_HEIGHT - H_MIN_HEIGHT

const useAnimatedHeader = () => {
  const scrollOffsetY = useRef(new Animated.Value(0)).current

  const [headerScrollHeight, setHeaderScrollHeight] = useState({} as Animated.AnimatedInterpolation)

  const scrollHeight = scrollOffsetY.interpolate({
    inputRange: [0, H_SCROLL_DISTANCE],
    outputRange: [H_MAX_HEIGHT, H_MIN_HEIGHT],
    extrapolate: 'clamp',
  })

  useEffect(() => {
    setHeaderScrollHeight(scrollHeight)
  }, [scrollOffsetY])

  const handleScroll = Animated.event([{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }], {
    useNativeDriver: false,
  })

  return { headerScrollHeight, handleScroll }
}

export default useAnimatedHeader
