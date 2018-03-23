<template>
  <main class="site-content projects">
    <section class="box box--lg">
      <fieldset class="fieldset">
        <legend class="fieldset-title">
          <h3 class="box-title"><span>{{ $t("projects.title") }}</span></h3>
        </legend>
        <div class="fieldset-content">
          <article class="box-content">
            <div class="project-item" v-for="project in projects" :key="project.fullSize">
              <a class="project-link" :href="project.fullSize">
                <img class="project-image" :src="project.thumbnail">
                <span class="project-preview">{{ $t("projects.preview") }}</span>
              </a>
            </div>
          </article>
        </div>
      </fieldset>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
      projects: [{
          thumbnail: './static/img/projects/small-1.png',
          fullSize: 'static/img/projects/1.png'
        },
        {
          thumbnail: './static/img/projects/small-2.png',
          fullSize: 'static/img/projects/2.png'
        },
        {
          thumbnail: './static/img/projects/small-3.png',
          fullSize: 'static/img/projects/3.png'
        },
        {
          thumbnail: './static/img/projects/small-4.png',
          fullSize: 'static/img/projects/4.png'
        },
        {
          thumbnail: './static/img/projects/small-5.png',
          fullSize: 'static/img/projects/5.png'
        },
        {
          thumbnail: './static/img/projects/small-6.png',
          fullSize: 'static/img/projects/6.png'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables";
.project {
  &s {
    // Main container
    .box-content {
      width: $project-box-content-width;
      text-align: center;
    }
  }
  &-item {
    position: relative;
    display: inline-block;
    margin: $project-item-margin;
    line-height: 0;
  }
  &-link {
    display: inline-flex;
    justify-content: center;
    transition: $project-link-transition;
    &:after {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      width: 100%;
      height: 100%;
      content: '';
      background: $project-link-after-bg;
      transition: $project-link-after-transition;
      transform: $project-link-after-transform;
    }
    &:hover {
      .project-preview {
        opacity: 1;
        animation: $project-link-hover-preview;
      }
      &:after {
        transform: $project-link-hover-after-transform;
      }
    }
  }
  &-image {
    max-width: 100%;
  }
  &-preview {
    position: absolute;
    top: 50%;
    opacity: 0;
    z-index: 2;
    padding: $project-preview-padding;
    font-size: $project-preview-font-size;
    color: $project-preview-color;
    border: $project-preview-border;
    transition: $project-preview-transition;
    transform: $project-preview-transform;
  }
}

.fieldset {
  &-title {
    text-align: center;
  }
  &-content {
    max-height: 55vh;
    overflow-y: scroll;
    @media (min-height: $bp-sm) {
      max-height: 70vh;
    }
  }
}

@keyframes projectPreview {
  33% {
    transform: $project-preview-animation-transform-33;
  }
  50% {
    transform: $project-preview-animation-transform-50;
  }
}
</style>
