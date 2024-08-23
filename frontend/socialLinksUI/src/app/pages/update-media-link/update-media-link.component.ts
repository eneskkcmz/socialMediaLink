import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SocialMediaLinkService } from 'src/app/services/social-media-link.service';
import { Router } from '@angular/router';
import { SocialMediaLink, SocialMediaLinkDetailResponse } from 'src/app/models/socialMediaLink';

@Component({
  selector: 'app-update-media-link',
  templateUrl: './update-media-link.component.html',
  styleUrls: ['./update-media-link.component.scss']
})
export class UpdateMediaLinkComponent implements OnInit {
  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<UpdateMediaLinkComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: number },
    private fb: FormBuilder,
    private socialMediaLinkService: SocialMediaLinkService,
    private router: Router
  ) {
    this.form = this.fb.group({
      linkAdress: ['', Validators.required],
      linkAdressName: ['', Validators.required],
      linkAdressDescription: ['']
    });
  }

  ngOnInit(): void {
    this.socialMediaLinkService.getSocialMediaLinkById(this.data.id).subscribe((link: SocialMediaLinkDetailResponse) => {
      this.form.patchValue({
        linkAdress: link.data.linkAdress,
        linkAdressName: link.data.linkAdressName,
        linkAdressDescription: link.data.linkAdressDescription
      });
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.form.valid) {
      const formData = this.form.value;
      this.socialMediaLinkService.updateSocialMediaLink(this.data.id, formData).subscribe(success => {
        if (success) {
          this.dialogRef.close();
          this.router.navigateByUrl('/socialMediaLink');
        }
      });
    }
  }

  onDelete(): void {
    this.socialMediaLinkService.deleteSocialMediaLink(this.data.id).subscribe(success => {
      this.dialogRef.close();
      this.router.navigateByUrl('/socialMediaLink');
    });
  }
}
