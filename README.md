## ReactJS AutoComplete

pure ReactJS autoComplete country search

####Demo: http://autocomplete-react.seav.us/

####Requirements:
- Git
- NodeJS v6
- npm v3

####Install

```bash
git clone https://github.com/dayanstef/auto-complete-react-js
cd auto-complete-react-js
npm run setup
```

####Development

```bash
npm run dev
```

####Production build (integrated http-server)

```bash
npm run build
npm run start
```

####Nginx config (external http-server)

```code
server {
    listen  127.0.0.1:80;
    
    server_name yourdomain.com;
	
    root /path/to/project;
	
    location / {
        
        index index.html;
    
        try_files $uri $uri/ /index.html;
    }
}
```
