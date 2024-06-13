import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Skill } from '../skill.model';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.css'
})
export class SkillComponent {
  @Input() skill!: Skill;
}
