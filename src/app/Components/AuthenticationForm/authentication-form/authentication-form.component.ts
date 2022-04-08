import { userCredentials } from './../../../Models/security.model';
import { Component, OnInit } from '@angular/core';
import { EventEmitter, Injectable, NgModule, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-authentication-form',
  templateUrl: './authentication-form.component.html',
  styleUrls: ['./authentication-form.component.css']
})
export class AuthenticationFormComponent implements OnInit {

  @Output()
  onSubmit = new EventEmitter<userCredentials>();
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }
}

