import { Component, OnInit } from "@angular/core";
import { Server } from '../../../../models/server';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ServerService } from '../../../../services/server.service';
import { switchMap } from 'rxjs/operators';
import { VirtualBoxTemplate } from '../../../../models/templates/virtualbox-template';
import { VirtualBoxService } from '../../../../services/virtual-box.service';


@Component({
    selector: 'app-virtual-box-templates',
    templateUrl: './virtual-box-templates.component.html',
    styleUrls: ['./virtual-box-templates.component.scss']
})
export class VirtualBoxTemplatesComponent implements OnInit {
    server: Server;
    virtualBoxTemplates: VirtualBoxTemplate[] = [];

    constructor(
        private route: ActivatedRoute,
        private serverService: ServerService,
        private virtualBoxService: VirtualBoxService
    ) {}

    ngOnInit() {
        this.route.paramMap
        .pipe(
          switchMap((params: ParamMap) => {
            const server_id = params.get('server_id');
            return this.serverService.get(parseInt(server_id, 10));
          })
        )
        .subscribe((server: Server) => {
            this.server = server;

            this.virtualBoxService.getTemplates(this.server).subscribe((virtualBoxTemplates: VirtualBoxTemplate[]) => {
                virtualBoxTemplates.forEach((template) => {
                    if ((template.template_type === 'virtualbox') && !template.builtin) {
                        this.virtualBoxTemplates.push(template);
                    }
                });
            });
        });
    }
}
