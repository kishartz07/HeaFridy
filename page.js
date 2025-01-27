"use client"

import React, { useState } from "react"
import { Dashboard } from "../components/Dashboard"
import type { HealthData, User } from "../types/health"

const initialHealthData: HealthData = {
  heartRate: 70,
  steps: 0,
  calories: 0,
  sleepHours: 0,
  bloodOxygen: 98,
}

const user: User = {
  name: "John Doe",
  age: 30,
  weight: 70,
  height: 175,
}

export default function Home() {
  const [healthData, setHealthData] = useState<HealthData>(initialHealthData)

  const handleDataUpdate = (newData: HealthData) => {
    setHealthData(newData)
  }

  return (
    <main className="min-h-screen bg-gray-100">
      <Dashboard user={user} healthData={healthData} onDataUpdate={handleDataUpdate} />
    </main>
  )
}

