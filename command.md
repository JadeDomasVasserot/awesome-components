ng new awesome-components --style=scss --skip-tests=true --routing

ng add @angular/material

ng g m core

ng g m shared

ng g m social-media --routing

ng g c core/components/header

ng g c social-media/components/post-list

ng g c social-media/components/post-list-item

ng g c shared/components/comments --export
