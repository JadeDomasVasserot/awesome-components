import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Comment} from "../../../core/models/comment.model";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {
  animate,
  animateChild,
  group,
  query,
  sequence,
  stagger,
  state,
  style,
  transition,
  trigger, useAnimation
} from "@angular/animations";
import {FlashAnimation} from "../../animations/flash.animation";
import {slideAndFadeAnimation} from "../../animations/slide-and-fade.animation";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
  //créer des animations BrowserAnimationModule
  animations: [
    trigger('list',[
      transition(':enter', [
        //trouver élément selector
        query('@listItem', [
          stagger(200,[
            animateChild()
          ])
        ])
      ])
    ]),
    trigger('listItem', [
      state('default', style({
        transform: 'scale(1)',
        backgroundColor: 'white',
        'z-index': 1
      })),
      state('active', style({
        transform: 'scale(1.05)',
        backgroundColor: 'rgb(201,157,242)',
        'z-index': 2
      })),
      // <=> pour que ce soit retroactif
      transition('default => active', [
        animate('100ms ease-in-out')
      ]),
      transition('active => default', [
        animate('500ms ease-in-out')
      ]),
      // de void à n'import quel autre state 2 transitions non nommés
      transition('void => *', [ // :enter autre façon d'écrire la transition :leave pour le départ
        query('.comment-text, .comment-date', [ // cible les enfants du triggers
          style({
            opacity: 0
          })
        ]),
        useAnimation(slideAndFadeAnimation, {
          params: {
            time: '1000ms',
            startColor:'rgb(148,43,80)',
          }
        }),
        //déclencher les 2 en même temps
        group([
          useAnimation(FlashAnimation, {
            params: {
              time: '1000ms',
              flashColor:'rgb(122,98,107)',
            }
          }),
          query('.comment-text', [
            animate('250ms', style({
              opacity: 1
            }))
          ]),
          query('.comment-date', [
            animate('500ms', style({
              opacity: 1
            }))
          ])
        ])
      ])
    ])
  ]

})
export class CommentsComponent implements OnInit {
  @Input() comments!: Comment[];
  // @Output commiquer avec le parent
  @Output() newComment = new EventEmitter<string>();

  commentCtrl!: FormControl;
  // listItemAnimationState: 'default' | 'active' = 'default';
  animationStates: { [key: number]: 'default' | 'active' } = {} // dictionnary
  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.commentCtrl = this.formBuilder.control('', [Validators.required, Validators.minLength(10)]);
    for (let index in this.comments) {
      this.animationStates[index] = "default";
    }
  }

  onLeaveComment() {
    if (this.commentCtrl.invalid) {
      return;
    }
    const maxId = Math.max(...this.comments.map(comment => comment.id));
    this.comments.unshift({
      id: maxId + 1,
      comment: this.commentCtrl.value,
      createdDate: new Date(),
      userId: 1

    })
    this.newComment.emit(this.commentCtrl.value);
    this.commentCtrl.reset();
  }

  onListItemMouseEnter(index: number) {
    // this.listItemAnimationState = "active";
    this.animationStates[index] = 'active'
  }

  onListItemMouseLeave(index: number) {
    // this.listItemAnimationState = "default";
    this.animationStates[index] = 'default'
  }

}
