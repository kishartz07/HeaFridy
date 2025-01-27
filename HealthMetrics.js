import type React from "react"
import type { HealthData, User } from "../types/health"
import { calculateBMI, interpretHeartRate, interpretBloodOxygen } from "../utils/healthUtils"

interface HealthMetricsProps {
  healthData: HealthData
  user: User
}

export const HealthMetrics: React.FC<HealthMetricsProps> = ({ healthData, user }) => {
  const bmi = calculateBMI(user)

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Health Metrics</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="font-semibold">Heart Rate</h3>
          <p>
            {healthData.heartRate} bpm ({interpretHeartRate(healthData.heartRate)})
          </p>
        </div>
        <div>
          <h3 className="font-semibold">Steps</h3>
          <p>{healthData.steps}</p>
        </div>
        <div>
          <h3 className="font-semibold">Calories Burned</h3>
          <p>{healthData.calories} kcal</p>
        </div>
        <div>
          <h3 className="font-semibold">Sleep</h3>
          <p>{healthData.sleepHours} hours</p>
        </div>
        <div>
          <h3 className="font-semibold">Blood Oxygen</h3>
          <p>
            {healthData.bloodOxygen}% ({interpretBloodOxygen(healthData.bloodOxygen)})
          </p>
        </div>
        <div>
          <h3 className="font-semibold">BMI</h3>
          <p>{bmi}</p>
        </div>
      </div>
    </div>
  )
}

