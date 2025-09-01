FROM nginx:alpine

# Copy static site to nginx html directory
COPY ./ /usr/share/nginx/html/

# Expose port (Koyeb/most platforms auto-detect)
EXPOSE 80

# Healthcheck
HEALTHCHECK --interval=30s --timeout=3s CMD wget -qO- http://localhost/ >/dev/null || exit 1
