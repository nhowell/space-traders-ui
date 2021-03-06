import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { LoginLayout } from "./layout/login/LoginLayout";
import { MainLayout } from "./layout/main/MainLayout";
import { spaceTradersQueryClient } from "../spacetraders-api/hooks/spaceTradersQueryClient";
import { AuthProvider } from "./AuthProvider";
import { loginPath, routes } from "./routes";
import { PrivateRoute } from "./PrivateRoute";
import { NotFound } from "./NotFound";
import { CurrentDateTimeProvider } from "./CurrentDateTimeProvider";
import { SpaceTradersApiProvider } from "./SpaceTradersApiProvider";

export function App() {
	return (
		<QueryClientProvider client={spaceTradersQueryClient}>
			<BrowserRouter>
				<AuthProvider>
					<Switch>
						<Route exact path={loginPath}>
							<LoginLayout />
						</Route>
						<PrivateRoute path="*">
							<SpaceTradersApiProvider>
								<CurrentDateTimeProvider>
									<MainLayout>
										<Switch>
											{routes.map((route) => (
												<Route key={route.path} path={route.path} exact>
													<route.component />
												</Route>
											))}
											<Route path="*">
												<NotFound />
											</Route>
										</Switch>
									</MainLayout>
								</CurrentDateTimeProvider>
							</SpaceTradersApiProvider>
						</PrivateRoute>
					</Switch>
				</AuthProvider>
			</BrowserRouter>
			<ReactQueryDevtools />
		</QueryClientProvider>
	);
}
