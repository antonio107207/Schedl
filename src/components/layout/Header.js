import React, { Component } from "react";
import { connect } from 'react-redux';
import HeaderFlexContainer from "../common/styled/wrappers/HeaderFlexContainer";
import HeaderLogo from "../common/styled/images/HeaderLogo";
import HeaderNav from "../common/styled/navs/HeaderNav";
import HeaderNavItem from "../common/styled/navs/HeaderNavItem";
import HeaderSearchForm from "../common/styled/forms/search/HeaderSearchForm";
import HeaderSearchInput from "../common/styled/forms/search/HeaderSearchInput";
import HeaderSearchButton from "../common/styled/buttons/HeaderSearchButton";
import Menu from "../common/styled/images/Menu";
import UserInfo from "./UserInfo";
import { Link } from "react-router-dom";
import HeaderLink from "../common/styled/links/HeaderLink";
import HeaderHiddenContainer from "../common/styled/wrappers/HeaderHiddenContainer";
import HeaderHiddenItem from "../common/styled/wrappers/HeaderHiddenItem";
import HeaderLogOutIcon from "../common/styled/images/HeaderLogOutIcon";
import Cookies from 'universal-cookie';
import {addDays} from "date-fns";

const cookies = new Cookies();

class Header extends Component{
    constructor(props) {
        super(props);
        this.state = {props};
    }

	 showHiddenContainer = () => {
		const menu = document.getElementById("hiddenContainer");
		return menu.style.display === "flex" ?
			menu.style.display = "none" :
			menu.style.display = "flex";
	};

    logOut = () =>{
        this.props.dispatch({
            type: 'REMOVE_USER',
            payload: undefined
        });
    };

	render() {
		return (
			<HeaderFlexContainer>
				{/*Logo*/}
				<a href="/">
					<HeaderLogo />
				</a>
				<HeaderHiddenContainer id="hiddenContainer">
					<HeaderHiddenItem>
						{/*Navigation*/}
						<HeaderNav>
						<HeaderNavItem>
							<Link to="#">
								<HeaderLink>
									Мій кабінет
								</HeaderLink>
							</Link>
						</HeaderNavItem>
						<HeaderNavItem>
							<Link to="/schedule/creating/step_1">
								<HeaderLink>
									Новий розклад
								</HeaderLink>
							</Link>
						</HeaderNavItem>
						<HeaderNavItem>
							<Link to="#">
								<HeaderLink>
									Сповіщення
								</HeaderLink>
							</Link>
						</HeaderNavItem>
					</HeaderNav>
					</HeaderHiddenItem>
					<HeaderHiddenItem>
						{/*Search*/}
						<HeaderSearchForm action="/" method="POST">
							<HeaderSearchInput type="search" name="search"/>
							<HeaderSearchButton type="submit"> </HeaderSearchButton>
						</HeaderSearchForm>
					</HeaderHiddenItem>
					<HeaderHiddenItem>
						{/*User*/}
						< UserInfo />

						{/*Log-out icon*/}
						<a href="/logout" onClick={this.logOut}>
							<HeaderLogOutIcon />
						</a>
					</HeaderHiddenItem>
				</HeaderHiddenContainer>
				{/*Menu icon*/}
				<Menu onClick={this.showHiddenContainer} />

			</HeaderFlexContainer>
		);
	}
}

const mapStateToProps = (state) => {
    return state;
};


export default connect(mapStateToProps)(Header);
