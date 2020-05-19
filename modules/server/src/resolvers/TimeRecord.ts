import { v4 } from 'uuid'
import { db } from '../index'
import { TimeRecord, Maybe } from '@paw/core'

interface TimeRecordInput {
  activity: string
  time: number
  date: number
}

export const TimeRecordMutations = {
  createTimeRecord: ({ activity, time, date }: TimeRecordInput): Maybe<TimeRecord> => {
    const newTimeRecord = {
      id: v4(),
      activity,
      time,
      date,
    }
    try {
      db.query(
        'INSERT INTO "TimeRecord" (id, activity, time, date) VALUES ($1, $2, $3, $4)',
        Object.values(newTimeRecord),
      )
      return newTimeRecord
    } catch (error) {
      console.error('Could not create new timeRecord', { error })
      return null
    }
  },
}

export const TimeRecordQueries = {
  allTimeRecords: async (): Promise<Maybe<[TimeRecord]>> => {
    try {
      const query = await db.query('SELECT * FROM "TimeRecord"')
      const results = query.rows[0]
      return results
    } catch (error) {
      console.error('Could not query all timeRecords', { error })
      return null
    }
  },
}
