import React from "react"

function Container({ children }) {
  return (
    <div
      style={{ "maxWidth": "1100px", "minWidth": "450px", "margin": "auto" }}
    >
      {children}
    </div>
  )
}

export default Container
