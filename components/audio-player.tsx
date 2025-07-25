"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, Volume2, VolumeX, Music } from "lucide-react"

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState(0.3) // Lower initial volume for autoplay
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState("")
  const [userInteracted, setUserInteracted] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateTime = () => setCurrentTime(audio.currentTime)
    const updateDuration = () => {
      setDuration(audio.duration)
      setIsLoaded(true)
    }
    const handleError = () => {
      setError("Failed to load audio")
      setIsLoaded(false)
    }
    const handleCanPlay = () => {
      setIsLoaded(true)
      setError("")
      // Try autoplay when audio is ready
      if (!userInteracted) {
        attemptAutoplay()
      }
    }
    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)

    audio.addEventListener("timeupdate", updateTime)
    audio.addEventListener("loadedmetadata", updateDuration)
    audio.addEventListener("ended", () => setIsPlaying(false))
    audio.addEventListener("error", handleError)
    audio.addEventListener("canplay", handleCanPlay)
    audio.addEventListener("loadstart", () => setIsLoaded(false))
    audio.addEventListener("play", handlePlay)
    audio.addEventListener("pause", handlePause)

    // Set initial volume and properties
    audio.volume = volume
    audio.loop = true // Enable loop for continuous play

    return () => {
      audio.removeEventListener("timeupdate", updateTime)
      audio.removeEventListener("loadedmetadata", updateDuration)
      audio.removeEventListener("ended", () => setIsPlaying(false))
      audio.removeEventListener("error", handleError)
      audio.removeEventListener("canplay", handleCanPlay)
      audio.removeEventListener("loadstart", () => setIsLoaded(false))
      audio.removeEventListener("play", handlePlay)
      audio.removeEventListener("pause", handlePause)
    }
  }, [volume, userInteracted])

  // Handle user interaction to enable autoplay
  useEffect(() => {
    const handleUserInteraction = () => {
      setUserInteracted(true)
      if (isLoaded && !isPlaying) {
        attemptAutoplay()
      }
    }

    // Listen for any user interaction
    document.addEventListener("click", handleUserInteraction, { once: true })
    document.addEventListener("keydown", handleUserInteraction, { once: true })
    document.addEventListener("touchstart", handleUserInteraction, { once: true })

    return () => {
      document.removeEventListener("click", handleUserInteraction)
      document.removeEventListener("keydown", handleUserInteraction)
      document.removeEventListener("touchstart", handleUserInteraction)
    }
  }, [isLoaded, isPlaying])

  const attemptAutoplay = async () => {
    const audio = audioRef.current
    if (!audio || !isLoaded) return

    try {
      // Start with low volume and muted for better autoplay success
      audio.volume = 0.1
      audio.muted = true
      await audio.play()

      // Gradually unmute and increase volume
      setTimeout(() => {
        if (audio && !audio.paused) {
          audio.muted = false
          audio.volume = volume
          setIsMuted(false)
          setIsPlaying(true)
        }
      }, 500)
    } catch (err) {
      console.log("Autoplay prevented by browser policy")
      setError("")
    }
  }

  const togglePlay = async () => {
    const audio = audioRef.current
    if (!audio || !isLoaded) return

    setUserInteracted(true)

    try {
      if (isPlaying) {
        audio.pause()
        setIsPlaying(false)
      } else {
        if (audio.muted) {
          audio.muted = false
          setIsMuted(false)
        }
        await audio.play()
        setIsPlaying(true)
      }
    } catch (err) {
      console.error("Error playing audio:", err)
      setError("Failed to play audio")
      setIsPlaying(false)
    }
  }

  const toggleMute = () => {
    const audio = audioRef.current
    if (!audio) return

    setUserInteracted(true)
    audio.muted = !isMuted
    setIsMuted(!isMuted)
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number.parseFloat(e.target.value)
    setVolume(newVolume)
    setUserInteracted(true)

    if (audioRef.current) {
      audioRef.current.volume = newVolume
      if (newVolume > 0 && isMuted) {
        audioRef.current.muted = false
        setIsMuted(false)
      }
    }
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current
    if (!audio || !isLoaded) return

    setUserInteracted(true)
    const newTime = Number.parseFloat(e.target.value)
    audio.currentTime = newTime
    setCurrentTime(newTime)
  }

  const formatTime = (time: number) => {
    if (!time || !isFinite(time)) return "0:00"
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-black/95 backdrop-blur-md border border-blue-900/30 rounded-lg p-4 min-w-[320px] shadow-2xl">
        <audio ref={audioRef} preload="auto" crossOrigin="anonymous" playsInline loop>
          <source src="https://wskffqaurfwbsuyokdjw.supabase.co/storage/v1/object/sign/aaa/song.mp3?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mYTFhZWY2My1mOWZkLTQ2MTYtOWIwYi00YzFhMDY5ZThkYTUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhYWEvc29uZy5tcDMiLCJpYXQiOjE3NTM0NjI2NjMsImV4cCI6MTc1NDA2NzQ2M30.MLGcL-drTi_J0AKByYQxaPjqN7iwgH-8sQZgdiL1oPc" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <Music className="text-blue-600 mr-2" size={16} />
            <h4 className="text-white font-cinzel font-bold text-sm">Little Pepe Theme</h4>
            {isPlaying && (
              <div className="ml-2 flex space-x-1">
                <div className="w-1 h-3 bg-blue-600 rounded animate-pulse"></div>
                <div className="w-1 h-2 bg-blue-600 rounded animate-pulse" style={{ animationDelay: "0.1s" }}></div>
                <div className="w-1 h-4 bg-blue-600 rounded animate-pulse" style={{ animationDelay: "0.2s" }}></div>
              </div>
            )}
          </div>
          <div className="text-xs text-gray-400">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>
        </div>

        {!userInteracted && (
          <div className="mb-3 text-xs text-blue-400 bg-blue-900/20 p-2 rounded text-center">
            Click anywhere to enable autoplay
          </div>
        )}

        {error && <div className="mb-3 text-xs text-red-400 bg-red-900/20 p-2 rounded">{error}</div>}

        {/* Progress Bar */}
        <div className="mb-3">
          <input
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime}
            onChange={handleSeek}
            disabled={!isLoaded}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
            style={{
              background: isLoaded
                ? `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${(currentTime / duration) * 100}%, #374151 ${(currentTime / duration) * 100}%, #374151 100%)`
                : "#374151",
            }}
          />
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between">
          <button
            onClick={togglePlay}
            disabled={!isLoaded}
            className={`text-white p-3 rounded-full transition-all duration-300 ${
              isLoaded ? "bg-blue-600 hover:bg-blue-700 hover:scale-105" : "bg-gray-600 cursor-not-allowed"
            }`}
            title={isLoaded ? (isPlaying ? "Pause" : "Play") : "Loading..."}
          >
            {!isLoaded ? (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : isPlaying ? (
              <Pause size={16} />
            ) : (
              <Play size={16} />
            )}
          </button>

          <div className="flex items-center space-x-2 flex-1 ml-4">
            <button
              onClick={toggleMute}
              className="text-gray-400 hover:text-white transition-colors p-1"
              disabled={!isLoaded}
            >
              {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              disabled={!isLoaded}
              className="flex-1 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${(isMuted ? 0 : volume) * 100}%, #374151 ${(isMuted ? 0 : volume) * 100}%, #374151 100%)`,
              }}
            />
            <span className="text-xs text-gray-400 w-8 text-right">{Math.round((isMuted ? 0 : volume) * 100)}%</span>
          </div>
        </div>

        {!isLoaded && !error && <div className="mt-2 text-xs text-gray-400 text-center">Loading audio...</div>}
      </div>
    </div>
  )
}

export default AudioPlayer
