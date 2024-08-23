import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SocialMediaLink, SocialMediaLinkResponse } from 'src/app/models/socialMediaLink';
import { SocialMediaLinkService } from 'src/app/services/social-media-link.service';
import { AddSocialMediaLinkDialogComponent } from '../add-social-media-link/add-social-media-link.component';
import { UpdateMediaLinkComponent } from '../update-media-link/update-media-link.component';

@Component({
  selector: 'app-social-media-link-list',
  templateUrl: './social-media-link-list.component.html',
  styleUrls: ['./social-media-link-list.component.scss']
})
export class SocialMediaLinkListComponent implements OnInit, AfterViewInit {

  @ViewChild(MatSort) sort!: MatSort;

  socialMediaLinkList: SocialMediaLink[] = [];
  displayedColumns: string[] = ['linkAdress', 'linkAdressName', 'linkAddressDescription'];
  dataSource = new MatTableDataSource<SocialMediaLink>();

  pageSize: number = 5;
  currentPage: number = 0;
  totalPages: number = 0;
  totalItems: number = 0;
  searchValue: string = '';

  constructor(
    private socialMediaLinkService: SocialMediaLinkService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.load();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  load(): void {
    this.socialMediaLinkService.getAll().subscribe((response: SocialMediaLinkResponse) => {
      this.socialMediaLinkList = response.data;
      this.totalItems = this.socialMediaLinkList.length;
      this.updateDataSource();
    });
  }

  updateDataSource() {
    const filteredData = this.socialMediaLinkList.filter(link =>
      link.linkAdress.toLowerCase().includes(this.searchValue.toLowerCase()) ||
      link.linkAdressName.toLowerCase().includes(this.searchValue.toLowerCase()) ||
      link.linkAdressDescription.toLowerCase().includes(this.searchValue.toLowerCase())
    );

    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.dataSource.data = filteredData.slice(startIndex, endIndex);
    this.totalPages = Math.ceil(filteredData.length / this.pageSize);
  }

  onPageSizeChange() {
    this.currentPage = 0;
    this.updateDataSource();
  }

  previousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.updateDataSource();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.updateDataSource();
    }
  }

  increasePageSize() {
    if (this.pageSize < this.totalItems) {
      this.pageSize++;
      this.updateDataSource();
    }
  }

  decreasePageSize() {
    if (this.pageSize > 1) {
      this.pageSize--;
      this.updateDataSource();
    }
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(AddSocialMediaLinkDialogComponent, {
      width: "488px",
      height: "406px",
      panelClass: 'custom-dialog-container'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog kapandı');
      this.load();
    });
  }

  openEditDialog(rowData: SocialMediaLink): void {
    const dialogRef = this.dialog.open(UpdateMediaLinkComponent, {
      width: "488px",
      height: "406px",
      panelClass: 'custom-dialog-container',
      data: { id: rowData._id }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog kapandı');
      this.load();
    });
  }

  onRowClick(rowData: SocialMediaLink): void {
    const clickedLinks: SocialMediaLink[] = JSON.parse(localStorage.getItem('clickedLinks') || '[]');
    const linkExists = clickedLinks.some(link => link._id === rowData._id);
    if (!linkExists) {
      clickedLinks.push(rowData);
    }
    localStorage.setItem('clickedLinks', JSON.stringify(clickedLinks));
    this.openEditDialog(rowData);
  }

  applyFilter() {
    this.updateDataSource();
  }
}
