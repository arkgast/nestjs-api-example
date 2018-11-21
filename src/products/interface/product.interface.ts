export interface Product {
  id: string
  name: string
  dataToAffirm: DataToAffirm[]
  dataToPay: DataToPay[]
  finalProduct: boolean
  parentId: string
  company: string
}

interface DataToAffirm {
  message: string
  name: string
  type: string
}

interface DataToPay {
  toShow: boolean
  dataToShow: DataToShow[]
}

interface DataToShow {
  name: string
}
