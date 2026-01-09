import chefLogo from "../../assets/chef-logo.png"

export default function Header() {
    return <>
    <header id="header">
        <img src={chefLogo} alt="Chef Logo" />
        <span>Chef Claude</span>
    </header>
    </>
}