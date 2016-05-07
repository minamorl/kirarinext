import React, {Component} from "react"

import Kirari from "../services/Kirari"


let client = new Kirari()
const AuthFailPage = () => {
  return (
    <div>
      <h2>エラー</h2>
      <p>ユーザーとしてログインして下さい．</p>
    </div>
  )
}
const AccountSettings = () => {
  const icon_reset = () => {
    client.update_icon().then(() => {
      window.location.reload()
    })
  }
  if(client.logged_in)
    return (
      <div>
        <h2>アカウント設定</h2>
        <form>
          <button onClick={icon_reset}>アイコンガチャ</button>
        </form>
      </div>
    )
  return <AuthFailPage />
}
export default AccountSettings
