import { PostsComponent } from "./posts.component";
import { Post } from '../../model/Post';
import { of } from "rxjs";
import { TestBed } from "@angular/core/testing";
import { PostsService } from "src/app/service/Posts/posts.service";

describe('PostsComponent using vanilla Jasmine',()=>{
    let samplePosts: Post[];
    let component : PostsComponent;
    let mockPostService: any;
    beforeEach(()=>{
        samplePosts = [{
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
          },
          {
            "id": 2,
            "title": "qui est esse",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
          },
          {
            "id": 3,
            "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
          }
        ]
        mockPostService = jasmine.createSpyObj(['getPosts','deletePost'])
        component = new PostsComponent(mockPostService);
    });

    describe('Delete Method',() =>{
        it('should delete the selected post from posts',()=>{
            component.posts = samplePosts;
            mockPostService.deletePost.and.returnValue(of(true));
            component.deletePost(samplePosts[1]);
            expect(component.posts.length).toBe(2);

            for(let post of component.posts){
                expect(post).not.toEqual(samplePosts[1]);
            }
        })

        it('should call delete method once',()=>{
            component.posts = samplePosts;
            mockPostService.deletePost.and.returnValue(of(true));
            // const count = spyOn(component,'deletePost');
            component.deletePost(samplePosts[1]);
            expect(mockPostService.deletePost).toHaveBeenCalledTimes(1);
        })
    })
})

describe('PostsComponent using TestBed and spyObject on service',()=>{
    let samplePosts: Post[];
    let component : PostsComponent;
    let mockPostService: any;
    beforeEach(()=>{
        samplePosts = [{
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
          },
          {
            "id": 2,
            "title": "qui est esse",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
          },
          {
            "id": 3,
            "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
          }
        ]
        mockPostService = jasmine.createSpyObj(['getPosts','deletePost']);
        TestBed.configureTestingModule({
            providers:[
                PostsComponent,
                {
                    provide: PostsService,
                    useValue: mockPostService
                }
            ]
        })
        component = TestBed.inject(PostsComponent);
    });

    describe('Delete Method',() =>{
        it('should delete the selected post from posts',()=>{
            component.posts = samplePosts;
            mockPostService.deletePost.and.returnValue(of(true));
            component.deletePost(samplePosts[1]);
            expect(component.posts.length).toBe(2);

            for(let post of component.posts){
                expect(post).not.toEqual(samplePosts[1]);
            }
        })

        it('should call delete method once',()=>{
            component.posts = samplePosts;
            mockPostService.deletePost.and.returnValue(of(true));
            // const count = spyOn(component,'deletePost');
            component.deletePost(samplePosts[1]);
            expect(mockPostService.deletePost).toHaveBeenCalledTimes(1);
        })
    })
})

class mockPostServiceClass{
    getPosts(){}

    deletePost(post: Post){
        return of(true);
    }
}

describe('PostsComponent using TestBed and mockService class',()=>{
    let samplePosts: Post[];
    let component : PostsComponent;
    let postService: any;
    beforeEach(()=>{
        samplePosts = [{
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
          },
          {
            "id": 2,
            "title": "qui est esse",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
          },
          {
            "id": 3,
            "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
          }
        ]
        TestBed.configureTestingModule({
            providers:[
                PostsComponent,
                {
                    provide: PostsService,
                    useClass: mockPostServiceClass
                }
            ]
        })
        component = TestBed.inject(PostsComponent);
        postService = TestBed.inject(PostsService);
    });

    describe('Delete Method',() =>{
        it('should delete the selected post from posts',()=>{
            component.posts = samplePosts;
            // postService.deletePost.and.callThrough();
            component.deletePost(samplePosts[1]);
            expect(component.posts.length).toBe(2);

            for(let post of component.posts){
                expect(post).not.toEqual(samplePosts[1]);
            }
        })

        it('should call delete method once',()=>{
            component.posts = samplePosts;
            // postService.deletePost.and.callThrough();
            spyOn(postService,'deletePost').and.callThrough();
            component.deletePost(samplePosts[1]);
            expect(postService.deletePost).toHaveBeenCalledTimes(1);
        })
    })
})