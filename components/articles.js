import { books } from "../data/books";
import Link from "next/link";
export default function Articles(props) {
  return (
    <div>
      {/* For every "book" in "books" */}
      {books.map((book) => (
        <div className="block flex border-2 p-5 w- justify-between">
          <Link href="/article/[id]" as={`/article/${book.id}`}>
            <div className="flex space-x-4 cursor-pointer">
              <div className=" border-2 rounded border-blue-700">
                <img
                  className="h-12"
                  src={book.image}
                  alt={`Image of ${books.name}`}
                />
              </div>
              <div className="">
                <div className="text-lg">{book.title}</div>
                <div className="text-sm font-bold">{book.author}</div>
              </div>
            </div>
          </Link>

          <div className="flex">
            <button
              className="p-3 text-white rounded bg-blue-600 hover:bg-gray-700"
              type="submit"
            >
              Låna
            </button>
          </div>
        </div>
      ))}
      <p className="text-xl invisible">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Sit amet risus
        nullam eget felis eget nunc. Ornare suspendisse sed nisi lacus sed
        viverra tellus in. Erat imperdiet sed euismod nisi. Quam id leo in vitae
        turpis massa sed elementum tempus. Id semper risus in hendrerit gravida
        rutrum. Posuere sollicitudin aliquam ultrices sagittis orci a
        scelerisque. Tincidunt dui ut ornare lectus sit amet est placerat.
        Lobortis feugiat vivamus at augue. Dui accumsan sit amet nulla facilisi.
        Elementum nibh tellus molestie nunc non blandit massa enim. Facilisis
        mauris sit amet massa vitae tortor condimentum lacinia. Mi bibendum
        neque egestas congue quisque egestas diam. Id ornare arcu odio ut sem
        nulla pharetra diam sit. Aliquet porttitor lacus luctus accumsan tortor
        posuere. Nec sagittis aliquam malesuada bibendum arcu. Laoreet non
        curabitur gravida arcu. Egestas egestas fringilla phasellus faucibus
        scelerisque eleifend donec. Nec ullamcorper sit amet risus. Enim diam
        vulputate ut pharetra. Id diam vel quam elementum pulvinar. Libero enim
        sed faucibus turpis in eu mi bibendum. Lectus nulla at volutpat diam ut
        venenatis tellus. Lorem dolor sed viverra ipsum nunc aliquet bibendum
        enim. Id consectetur purus ut faucibus. Lorem ipsum dolor sit amet
        consectetur adipiscing elit duis tristique. Urna duis convallis
        convallis tellus. Dignissim convallis aenean et tortor. Sodales ut etiam
        sit amet nisl purus in mollis nunc. Iaculis eu non diam phasellus
        vestibulum lorem sed. Adipiscing tristique risus nec feugiat in
        fermentum posuere urna nec. Cursus in hac habitasse platea dictumst
        quisque sagittis purus. Eget mauris pharetra et ultrices neque ornare
        aenean euismod elementum. Erat pellentesque adipiscing commodo elit.
        Mattis pellentesque id nibh tortor id aliquet lectus proin nibh.
        Ultrices in iaculis nunc sed augue lacus. Tellus at urna condimentum
        mattis pellentesque id nibh. Libero justo laoreet sit amet cursus sit
        amet. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Quis
        viverra nibh cras pulvinar mattis nunc sed blandit. At quis risus sed
        vulputate odio. Aliquam eleifend mi in nulla. Elit duis tristique
        sollicitudin nibh sit amet commodo. Sit amet nisl suscipit adipiscing.
        Dui ut ornare lectus sit amet est placerat in egestas. Orci sagittis eu
        volutpat odio facilisis mauris sit. Mattis enim ut tellus elementum
        sagittis vitae et leo duis. Orci ac auctor augue mauris augue neque
        gravida. Leo integer malesuada nunc vel. Semper risus in hendrerit
        gravida rutrum quisque. Praesent semper feugiat nibh sed pulvinar. Sit
        amet facilisis magna etiam. Integer enim neque volutpat ac tincidunt
        vitae semper. Sollicitudin nibh sit amet commodo nulla facilisi nullam
        vehicula. Viverra nibh cras pulvinar mattis nunc sed blandit libero.
        Diam maecenas sed enim ut. Vivamus at augue eget arcu dictum varius duis
        at consectetur. Vel orci porta non pulvinar neque laoreet suspendisse
        interdum consectetur. Orci nulla pellentesque dignissim enim sit amet.
        Massa placerat duis ultricies lacus. Tincidunt ornare massa eget egestas
        purus viverra accumsan in. Orci phasellus egestas tellus rutrum tellus
        pellentesque eu. Sed nisi lacus sed viverra tellus in hac habitasse.
        Curabitur vitae nunc sed velit dignissim sodales. Adipiscing vitae proin
        sagittis nisl rhoncus mattis. Eu volutpat odio facilisis mauris sit amet
        massa vitae tortor. Ullamcorper dignissim cras tincidunt lobortis
        feugiat vivamus at augue eget. Accumsan tortor posuere ac ut consequat
        semper. In arcu cursus euismod quis viverra nibh cras pulvinar mattis.
        Facilisis mauris sit amet massa vitae tortor condimentum.
      </p>
    </div>
  );
}
