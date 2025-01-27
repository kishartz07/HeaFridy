import { HealthData, type User } from "../types/health"

export function calculateBMI(user: User): number {
  const heightInMeters = user.height / 100
  return Number((user.weight / (heightInMeters * heightInMeters)).toFixed(1))
}

export function interpretHeartRate(heartRate: number): string {
  if (heartRate < 60) return "Low"
  if (heartRate > 100) return "High"
  return "Normal"
}

export function interpretBloodOxygen(bloodOxygen: number): string {
  if (bloodOxygen < 95) return "Low"
  return "Normal"
}

export function calculateCaloriesBurned(steps: number, user: User): number {
  // This is a very simplified calculation
  const caloriesPerStep = 0.04
  return Math.round(steps * caloriesPerStep)
}

