import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FilesComponent } from "./components/files/files.component";
import { UploadComponent } from "./components/upload/upload.component";

const ROUTES: Routes = [
  { path: "files", component: FilesComponent },
  { path: "upload", component: UploadComponent },
  { path: "**", pathMatch: "full", redirectTo: "files" }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
