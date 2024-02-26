import { first } from "rxjs";
import { PostComponent } from "./post.component"
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe("PostComponet",()=>{
  let fixture: ComponentFixture<PostComponent>;
  let component: PostComponent;
  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations: [PostComponent],
      schemas:[NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
  })

  it('should check if an instance of component is defined',()=>{
    expect(component).toBeDefined();
  })

  it('should raise an event when the delete post is clicked',()=>{
    const post = {id:1,title:'1',body:'body'};
    component.post = post;
    component.delete.pipe(first()).subscribe((selectedpost)=>{
      expect(selectedpost).toEqual(post);
    });
    component.onDeletePost(new MouseEvent('click'));
  })

  it('should render the post title in the anchor element',()=>{
    const post = {id:1,title:'1',body:'body'};
    component.post = post;
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    const a = el.querySelector('a');
    expect(a?.textContent).toContain(post.title);
  })
})