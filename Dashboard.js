import type React from "react"
import type { HealthData, User } from "../types/health"
import { HealthMetrics } from "./HealthMetrics"
import { WatchSimulator } from "./WatchSimulator"

interface DashboardProps {
  user: User
  healthData: HealthData
  onDataUpdate: (data: HealthData) => void
}

export const Dashboard: React.FC<DashboardProps> = ({ user, healthData, onDataUpdate }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Smart Health Watch Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <HealthMetrics healthData={healthData} user={user} />
        <WatchSimulator onDataUpdate={onDataUpdate} />
      </div>
    </div>
  )
}

