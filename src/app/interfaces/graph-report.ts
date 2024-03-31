export interface GraphReportInterface {
  data: GraphReportResponseInterface
  type: string
}

export interface GraphReportResponseInterface {
  agreeableness: number
  drive: number
  luck: number
  openess: number
}

export interface GraphReportMappedInterface {
  label: string
  y: number
}
