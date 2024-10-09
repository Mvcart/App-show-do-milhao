import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Question } from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  constructor(private firestore: AngularFirestore) {}

  addQuestion(question: Question) {
    return this.firestore.collection('questions').add(question);
  }

  getQuestions() {
    return this.firestore.collection('questions').snapshotChanges();
  }

  updateQuestion(id: string, question: Partial<Question>) {
    return this.firestore.doc(`questions/${id}`).update(question);
  }

  deleteQuestion(id: string) {
    return this.firestore.doc(`questions/${id}`).delete();
  }
}
