import { myCard } from "@/styles/classNames"
import { PropsWithChildren } from "react"

const AdventureText = ({children}: PropsWithChildren) => {
  return (
    <div className={`${myCard} bg-base-200`}>{children}</div>
  )
}

export default AdventureText
