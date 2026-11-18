export type RecordRow = {
  id: string
  campaign_id: string
  district: string
  town: string
  participant_code: string
  submitted_at: string
  answers: Record<string, string>
  latitude: number | null
  longitude: number | null
}
