export type DisplayedComponentT = 'Tabs' | 'AnalyzePending' | 'AnalyzeResults' | 'SubmissionTabs' | 'AnalyzeCharacters'
export type LocationT = 'BC' | 'CA' | 'IN' | 'INFO'
export type NrDataResponseT = RequestDataI | null
export type NrDataT = string | null
export type SearchComponentT = 'search' | 'analyzing' | 'results'
export type SubmissionTypeT = 'examination' | 'consent' | 'normal'

export interface ApplicantI {
  text: string
  value: string
}
export interface AnalysisJSONI {
  header?: string
  issues: IssueI[] | null
  status: 'fa' | 'rc' | 'ar'
}
export interface EntityI {
  text: string
  value: string
  cat?: string
  blurb?: string[] | string
  shortlist?: boolean
  rank?: number
}
export interface StatsI {
  auto: number,
  priority: {
    value: number,
    unit: string
  },
  standard: {
    value: number,
    unit: string
  }
}
export interface IssueI {
  consenting_body?: {
    name: string
    contact: string
  }
  conflicts?: {
    name: string
    date: string
  }
  designations?: string[]
  issue_type: string
  line1?: string
  line2?: string
  name_actions?: [
    {
      type: 'brackets' | 'highlight' | 'spelling' | 'strike'
      index: number
      word: string
      position ?: 'start' | 'end'
      message ?: string
    }
  ]
  setup: SetupI[]
  show_examination_button: boolean
  show_resere_button: boolean
}
export interface SetupI {
  button?: 'examine' | 'reserve' | 'consent-body' | 'consent-corp' | 'restart' | 'next'
  checkbox?: 'examine' | 'consent-corp' | 'consent-body'
  header: string
  text1: string
  text2?: string
}
export interface ApplicantInfoI {
  firstName: string
  lastName: string
  midddleName?: string
  Line1: string
  Line2?: string
  Country: string
  PostalCode: string
  City: string
  provState?: string
  Jurisdiction: string
}
export interface NewRequestNameSearchI {
  name: string
  request_action: string
  entity_type: string
  location: LocationT
}
export interface NameChoicesI {
  nameChoice1: string | null
  designation1: string | null
  [propName: string]: string
}
export interface OptionI {
  button?: string
  checkbox?: string
  header: string
  label?: string
  line1: string
  line2?: string
  type: string
}
export interface RequestDataI {
  nrNumber: number
  name: string
  conditions?: string
  applicantName: string
  address: string
  status: string
  expiry: string
}
export interface SearchDataI {
  nrNumber?: string
  name?: string
  email?: string
  phone?: string
}
export interface SelectOptionsI {
  text: string
  value: any
  [propName: string]: any
}