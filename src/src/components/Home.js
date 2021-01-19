import React from "react";

export const Home = () => {
	return (
		<div className="home">
			<div className="companies">
				<div className="companies-form">
					<div className="companies-box">
						<div className="home-title">Companies</div>
						<form>
							<table>
								<thead>
									<tr>
										<th><input type="text" name="name" placeholder="Company name"/></th>
										<th><input type="text" name="email" placeholder="Company name"/></th>
										<th><input type="file" name="logo" placeholder="Company name"/></th>
										<th><input type="text" name="website" placeholder="Company name"/></th>
									</tr>
								</thead>
							</table>
						</form>
					</div>
				</div>
			</div>

			<div className="employees">
				<div className="employees-box">
					<div className="home-title">Employees</div>
					<form>
						<input type="text" name="first_name" placeholder="First name"/>
						<input type="text" name="last_name" placeholder="Last name"/>
						<input type="text" name="company_id" placeholder="Company id"/>
						<input type="text" name="email" placeholder="Email"/>
						<input type="text" name="phone" placeholder="Phone"/>
					</form>
				</div>
			</div>
		</div>
	)
}