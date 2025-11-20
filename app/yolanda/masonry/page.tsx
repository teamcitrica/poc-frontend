"use client";
import Text from "@/shared/components/citrica-ui/atoms/text";
import { MasonryGallery, MasonryItem  } from "./components/mansonry-gallery";
import { Container } from "@/styles/07-objects/objects";

const items: MasonryItem[] = [
  { id: "1", title: "Foto 1", imageUrl: "https://cdn.pixabay.com/photo/2017/06/12/19/02/cat-2396473__480.jpg" },
  { id: "2", title: "Foto 2", imageUrl: "https://cdn.pixabay.com/photo/2015/06/03/13/13/cats-796437__480.jpg" },
  { id: "3", title: "Foto 3", imageUrl: "https://cdn.pixabay.com/photo/2012/11/26/13/58/cat-67345__480.jpg" },
  { id: "4", title: "Foto 4", imageUrl: "https://cdn.pixabay.com/photo/2014/09/18/20/17/cat-451377__480.jpg" },
  { id: "5", title: "Foto 5", imageUrl: "https://cdn.pixabay.com/photo/2015/01/31/12/36/cat-618470__480.jpg" },
  { id: "6", title: "Foto 6", imageUrl: "https://cdn.pixabay.com/photo/2014/07/24/18/40/cat-401124__480.jpg" },
  { id: "7", title: "Foto 7", imageUrl: "https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262__480.jpg" },
  { id: "8", title: "Foto 8", imageUrl: "https://cdn.pixabay.com/photo/2015/02/14/10/16/cat-636172__480.jpg" },
  { id: "9", title: "Foto 9", imageUrl: "https://cdn.pixabay.com/photo/2013/10/28/14/30/cat-201855__480.jpg" },
  { id: "10", title: "Foto 10", imageUrl: "https://cdn.pixabay.com/photo/2015/04/16/15/21/cat-725793__480.jpg" },
  { id: "11", title: "Foto 11", imageUrl: "https://cdn.pixabay.com/photo/2016/01/20/13/05/cat-1151519__480.jpg" },
  { id: "12", title: "Foto 12", imageUrl: "https://cdn.pixabay.com/photo/2017/05/31/21/52/cat-2361787__480.jpg" },
  { id: "13", title: "Foto 13", imageUrl: "https://cdn.pixabay.com/photo/2014/10/01/10/46/cat-468232__480.jpg" },
  { id: "14", title: "Foto 14", imageUrl: "https://cdn.pixabay.com/photo/2014/04/29/13/19/cat-334383__480.jpg" },
  { id: "15", title: "Foto 15", imageUrl: "https://cdn.pixabay.com/photo/2014/01/17/14/53/cat-246933__480.jpg" },
  { id: "16", title: "Foto 16", imageUrl: "https://cdn.pixabay.com/photo/2017/05/31/21/46/cats-2361762__480.jpg" },
  { id: "17", title: "Foto 17", imageUrl: "https://cdn.pixabay.com/photo/2017/05/21/22/06/cat-2332444__480.jpg" },
  { id: "18", title: "Foto 18", imageUrl: "https://cdn.pixabay.com/photo/2014/03/30/23/35/cat-301720__480.jpg" },
  { id: "19", title: "Foto 19", imageUrl: "https://cdn.pixabay.com/photo/2017/05/21/22/07/cat-2332451__480.jpg" },
  { id: "20", title: "Foto 20", imageUrl: "https://cdn.pixabay.com/photo/2014/08/03/00/51/kitten-408798__480.jpg" },
  { id: "21", title: "Foto 21", imageUrl: "https://cdn.pixabay.com/photo/2017/05/11/07/27/cat-2303146__480.jpg" },
  { id: "22", title: "Foto 22", imageUrl: "https://cdn.pixabay.com/photo/2014/03/30/23/49/cat-301723__480.jpg" },
  { id: "23", title: "Foto 23", imageUrl: "https://cdn.pixabay.com/photo/2013/07/18/20/27/cat-165068__480.jpg" },
  { id: "24", title: "Foto 24", imageUrl: "https://cdn.pixabay.com/photo/2017/05/25/07/40/cat-2342562__480.jpg" },
  { id: "25", title: "Foto 25", imageUrl: "https://cdn.pixabay.com/photo/2017/05/30/22/27/british-shorthair-2358404__480.jpg" },
  { id: "26", title: "Foto 26", imageUrl: "https://cdn.pixabay.com/photo/2012/02/27/16/57/animal-17430__480.jpg" },
  { id: "27", title: "Foto 27", imageUrl: "https://cdn.pixabay.com/photo/2017/04/06/15/15/cat-2208535__480.jpg" },
  { id: "28", title: "Foto 28", imageUrl: "https://cdn.pixabay.com/photo/2017/05/18/10/57/cat-2323258__480.jpg" },
  { id: "29", title: "Foto 29", imageUrl: "https://cdn.pixabay.com/photo/2016/11/18/21/26/cat-1836936__480.jpg" },
  { id: "30", title: "Foto 30", imageUrl: "https://cdn.pixabay.com/photo/2017/03/19/22/09/cat-2157747__480.jpg" },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Container className="container mx-auto py-8 px-4">
        <h1 className="text-center mb-8">
          <Text variant="headline" textColor="black">
            Galería Masonry - {items.length} Imágenes
          </Text>
        </h1>
        <MasonryGallery 
          items={items} 
          height={800}
          columnWidth={280}
          columnGutter={16}
          rowGutter={16}
          overscanBy={5}
        />
      </Container>
    </main>
  );
}
