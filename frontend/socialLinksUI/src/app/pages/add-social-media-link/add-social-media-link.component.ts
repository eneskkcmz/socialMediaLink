import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SocialMediaLinkService } from 'src/app/services/social-media-link.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-social-media-link',
  templateUrl: './add-social-media-link.component.html',
  styleUrls: ['./add-social-media-link.component.scss']
})
export class AddSocialMediaLinkDialogComponent {

  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddSocialMediaLinkDialogComponent>,
    private fb: FormBuilder,
    private socialMediaLinkService: SocialMediaLinkService, private router: Router
  ) {
    this.form = this.fb.group({
      linkAdress: ['', Validators.required],
      linkAdressName: ['', Validators.required],
      linkAdressDescription: ['']
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.form.valid) {
      const formData = this.form.value;
      this.socialMediaLinkService.crateSocialMediaLink(formData).subscribe(success => {
        if (success) {
          this.dialogRef.close();
          this.router.navigateByUrl('/socialMediaLink');
        }
      });
    }
  }
}
