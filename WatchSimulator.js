import type React from "react"
import { useState, useEffect } from "react"
import type { HealthData } from "../types/health"

interface WatchSimulatorProps {
  onDataUpdate: (data: HealthData) => void
}

export const WatchSimulator: React.FC<WatchSimulatorProps> = ({ onDataUpdate }) => {
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isRunning) {
      interval = setInterval(() => {
        const newData: HealthData = {
          heartRate: Math.floor(Math.random() * (100 - 60) + 60),
          steps: Math.floor(Math.random() * 1000),
          calories: Math.floor(Math.random() * 500),
          sleepHours: Number((Math.random() * 10).toFixed(1)),
          bloodOxygen: Number((Math.random() * (100 - 95) + 95).toFixed(1)),
        }
        onDataUpdate(newData)
      }, 5000) // Update every 5 seconds
    }

    return () => clearInterval(interval)
  }, [isRunning, onDataUpdate])

  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Watch Simulator</h2>
      <button
        onClick={() => setIsRunning(!isRunning)}
        className={`px-4 py-2 rounded ${isRunning ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"}`}
      >
        {isRunning ? "Stop Simulation" : "Start Simulation"}
      </button>
      <p className="mt-2">Status: {isRunning ? "Running" : "Stopped"}</p>
    </div>
  )
}

