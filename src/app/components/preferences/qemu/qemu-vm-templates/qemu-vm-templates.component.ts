import { Component, OnInit } from "@angular/core";
import { Server } from '../../../../models/server';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ServerService } from '../../../../services/server.service';
import { switchMap } from 'rxjs/operators';
import { QemuTemplate } from '../../../../models/templates/qemu-template';
import { QemuService } from '../../../../services/qemu.service';


@Component({
    selector: 'app-qemu-virtual-machines-templates',
    templateUrl: './qemu-vm-templates.component.html',
    styleUrls: ['./qemu-vm-templates.component.scss']
})
export class QemuVmTemplatesComponent implements OnInit {
    server: Server;
    qemuTemplates: QemuTemplate[] = [];

    constructor(
        private route: ActivatedRoute,
        private serverService: ServerService,
        private qemuService: QemuService 
    ) {}

    ngOnInit() {
        const server_id = this.route.snapshot.paramMap.get("server_id");
        const template_id = this.route.snapshot.paramMap.get("template_id");
        this.serverService.get(parseInt(server_id, 10)).then((server: Server) => {
            this.server = server;
            
            this.qemuService.getTemplates(server).subscribe((qemuTemplates: QemuTemplate[]) => {
                qemuTemplates.forEach((template) => {
                    if ((template.template_type === 'qemu') && !template.builtin) {
                        this.qemuTemplates.push(template);
                    }
                });
            });
        });
    }
}
