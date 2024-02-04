import { Component, OnInit, inject } from "@angular/core";
import { NavigationEnd, Router, RouterModule } from "@angular/router";
import { IconModule, SideNavModule } from "carbon-components-angular";
import { filter } from "rxjs/operators";

@Component({
	standalone: true,
	imports: [SideNavModule, RouterModule, IconModule],
	selector: "app-side-nav",
	templateUrl: "./side-nav.component.html",
	styleUrls: ["./side-nav.component.scss"],
})
export class SideNavComponent implements OnInit {
	private router = inject(Router);
	public currentRoute = "";
	ngOnInit(): void {
		this.router.events
			.pipe(filter((event) => event instanceof NavigationEnd))
			.subscribe(() => {
				this.currentRoute = this.router.url;
			});
	}

	isActive(route: string): boolean {
		return this.router.isActive(route, false);
	}
}
