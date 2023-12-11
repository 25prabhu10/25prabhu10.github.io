import{_ as t,r as o,o as s,c as d,b as e,d as n,a as i,e as l}from"./app-jDLxG9B3.js";const h={},r=l(`<h1 id="chess" tabindex="-1"><a class="header-anchor" href="#chess" aria-hidden="true">#</a> Chess</h1><p>Chess is played on a board of 64 squares arranged in eight vertical rows called files and eight horizontal rows called ranks</p><h2 id="setup" tabindex="-1"><a class="header-anchor" href="#setup" aria-hidden="true">#</a> Setup</h2><ul><li>The eight ranks are numbered <code>1</code> through <code>8</code> beginning with the rank closest to White</li><li>The files are labelled <code>a</code> through <code>h</code> beginning with the file at White&#39;s left hand</li></ul><div class="language-text" data-ext="text"><pre class="language-text"><code> -------------------------------
| *R| *N| *B| *K| *Q| *B| *N| *R| 8 Black
|---+---+---+---+---+---+---+---|           ^
| *P| *P| *P| *P| *P| *P| *P| *P| 7         |
|---+---+---+---+---+---+---+---|           |
|   |   |   |   |   |   |   |   | 6         |
|---+---+---+---+---+---+---+---|           |
|   |   |   |   |   |   |   |   | 5
|---+---+---+---+---+---+---+---|          file
|   |   |   |   |   |   |   |   | 4
|---+---+---+---+---+---+---+---|           |
|   |   |   |   |   |   |   |   | 3         |
|---+---+---+---+---+---+---+---|           |
| P | P | P | P | P | P | P | P | 2         |
|---+---+---+---+---+---+---+---|           |
| R | N | B | K | Q | B | N | R | 1 White
 -------------------------------
  a   b   c   d   e   f   g   h

  ----------- rank -----------&gt;
</code></pre></div><h3 id="algebraic-notation-an" tabindex="-1"><a class="header-anchor" href="#algebraic-notation-an" aria-hidden="true">#</a> Algebraic Notation (AN)</h3><p>AN is the standard method for recording and describing the moves in a game of chess</p><p>It is language of chess</p><ul><li><code>K</code>: King</li><li><code>Q</code>: Queen</li><li><code>R</code>: Rook</li><li><code>B</code>: Bishop</li><li><code>N</code>: Knight</li><li><code>P</code>: Pawn (omitted from notation)</li></ul><p>Special Symbols:</p><ul><li><code>x</code>: captures</li><li><code>0-0</code>: kingside castle</li><li><code>0-0-0</code>: queenside castle</li><li><code>+</code>: check</li><li><code>#</code>: checkmate</li><li><code>!</code>: good move</li><li><code>?</code>: poor move</li><li>more <code>!s</code> and <code>?s</code> can be added for emphasis</li></ul><h2 id="movements" tabindex="-1"><a class="header-anchor" href="#movements" aria-hidden="true">#</a> Movements</h2><p>White moves first</p><h3 id="king" tabindex="-1"><a class="header-anchor" href="#king" aria-hidden="true">#</a> King</h3><ul><li>1 square in any direction</li></ul><div class="language-text" data-ext="text"><pre class="language-text"><code> -------------------------------
|   |   |   |   |   |   |   |   | 8
|---+---+---+---+---+---+---+---|
|   |   |   |   |   |   |   |   | 7
|---+---+---+---+---+---+---+---|
|   |   |   |   | . | . | . |   | 6
|---+---+---+---+---+---+---+---|
|   |   |   |   | . | K | . |   | 5
|---+---+---+---+---+---+---+---|
|   |   |   |   | . | . | . |   | 4
|---+---+---+---+---+---+---+---|
|   |   |   |   |   |   |   |   | 3
|---+---+---+---+---+---+---+---|
|   |   |   |   |   |   |   |   | 2
|---+---+---+---+---+---+---+---|
|   |   |   |   |   |   |   |   | 1
 -------------------------------
  a   b   c   d   e   f   g   h
</code></pre></div><ul><li><p>Castling: The king moves two spaces to the left or to the right, and the rook moves over and in front of the king, all in one move!</p><ul><li><p>Rules for castling:</p><ul><li>Your king can not have moved</li><li>Your rook can not have moved</li><li>Your king can NOT be in check</li><li>Your king can not pass through check</li><li>No pieces can be between the king and rook</li></ul></li></ul></li></ul><h3 id="queen" tabindex="-1"><a class="header-anchor" href="#queen" aria-hidden="true">#</a> Queen</h3><ul><li>9 Points</li></ul><div class="language-text" data-ext="text"><pre class="language-text"><code> -------------------------------
| . |   |   | . |   |   | . |   | 8
|---+---+---+---+---+---+---+---|
|   | . |   | . |   | . |   |   | 7
|---+---+---+---+---+---+---+---|
|   |   | . | . | . |   |   |   | 6
|---+---+---+---+---+---+---+---|
| . | . | . | Q | . | . | . | . | 5
|---+---+---+---+---+---+---+---|
|   |   | . | . | . |   |   |   | 4
|---+---+---+---+---+---+---+---|
|   | . |   | . |   | . |   |   | 3
|---+---+---+---+---+---+---+---|
| . |   |   | . |   |   | . |   | 2
|---+---+---+---+---+---+---+---|
|   |   |   | . |   |   |   | . | 1
 -------------------------------
  a   b   c   d   e   f   g   h
</code></pre></div><h3 id="rook" tabindex="-1"><a class="header-anchor" href="#rook" aria-hidden="true">#</a> Rook</h3><ul><li>5 Points</li></ul><div class="language-text" data-ext="text"><pre class="language-text"><code> -------------------------------
|   |   |   |   |   | . |   |   | 8
|---+---+---+---+---+---+---+---|
|   |   |   |   |   | . |   |   | 7
|---+---+---+---+---+---+---+---|
|   |   |   |   |   | . |   |   | 6
|---+---+---+---+---+---+---+---|
| . | . | . | . | . | R | . | . | 5
|---+---+---+---+---+---+---+---|
|   |   |   |   |   | . |   |   | 4
|---+---+---+---+---+---+---+---|
|   |   |   |   |   | . |   |   | 3
|---+---+---+---+---+---+---+---|
|   |   |   |   |   | . |   |   | 2
|---+---+---+---+---+---+---+---|
|   |   |   |   |   | . |   |   | 1
 -------------------------------
  a   b   c   d   e   f   g   h
</code></pre></div><h3 id="bishop" tabindex="-1"><a class="header-anchor" href="#bishop" aria-hidden="true">#</a> Bishop</h3><ul><li>3 Points (3.25 - 3.15)</li></ul><div class="language-text" data-ext="text"><pre class="language-text"><code> -------------------------------
| . |   |   |   |   |   | . |   | 8
|---+---+---+---+---+---+---+---|
|   | . |   |   |   | . |   |   | 7
|---+---+---+---+---+---+---+---|
|   |   | . |   | . |   |   |   | 6
|---+---+---+---+---+---+---+---|
|   |   |   | B |   |   |   |   | 5
|---+---+---+---+---+---+---+---|
|   |   | . |   | . |   |   |   | 4
|---+---+---+---+---+---+---+---|
|   | . |   |   |   | . |   |   | 3
|---+---+---+---+---+---+---+---|
| . |   |   |   |   |   | . |   | 2
|---+---+---+---+---+---+---+---|
|   |   |   |   |   |   |   | . | 1
 -------------------------------
  a   b   c   d   e   f   g   h
</code></pre></div><h3 id="knight" tabindex="-1"><a class="header-anchor" href="#knight" aria-hidden="true">#</a> Knight</h3><ul><li>3 Points</li></ul><div class="language-text" data-ext="text"><pre class="language-text"><code> -------------------------------
|   |   |   |   |   |   |   |   | 8
|---+---+---+---+---+---+---+---|
|   |   | . |   | . |   |   |   | 7
|---+---+---+---+---+---+---+---|
|   | . |   |   |   | . |   |   | 6
|---+---+---+---+---+---+---+---|
|   |   |   | N |   |   |   |   | 5
|---+---+---+---+---+---+---+---|
|   | . |   |   |   | . |   |   | 4
|---+---+---+---+---+---+---+---|
|   |   | . |   | . |   |   |   | 3
|---+---+---+---+---+---+---+---|
|   |   |   |   |   |   |   |   | 2
|---+---+---+---+---+---+---+---|
|   |   |   |   |   |   |   |   | 1
 -------------------------------
  a   b   c   d   e   f   g   h
</code></pre></div><h3 id="pawn" tabindex="-1"><a class="header-anchor" href="#pawn" aria-hidden="true">#</a> Pawn</h3><ul><li>1 Point</li></ul><div class="language-text" data-ext="text"><pre class="language-text"><code> -------------------------------
|   |   |   |   |   |   |   |   | 8
|---+---+---+---+---+---+---+---|
|   |   |   |   |   |   |   |   | 7
|---+---+---+---+---+---+---+---|
|   |   |   | . |   |   |   |   | 6
|---+---+---+---+---+---+---+---|
|   |   |   | P |   |   |   |   | 5
|---+---+---+---+---+---+---+---|
|   |   |   |   |   | . |   |   | 4
|---+---+---+---+---+---+---+---|
|   |   |   |   |   | . |   |   | 3
|---+---+---+---+---+---+---+---|
|   |   |   |   |   | P |   |   | 2
|---+---+---+---+---+---+---+---|
|   |   |   |   |   |   |   |   | 1
 -------------------------------
  a   b   c   d   e   f   g   h
</code></pre></div>`,32),c=e("li",null,[e("p",null,"Promotion: to queen, rook, bishop, or knight of the same color, when a pawn advances to its eighth rank, as part of the move (mandatory)"),e("ul",null,[e("li",null,[n("Promotion to a queen is known as "),e("em",null,"queening")]),e("li",null,[n("Promotion to any other piece is known as "),e("em",null,"under-promotion")])])],-1),u={href:"https://www.chess.com/terms/en-passant",target:"_blank",rel:"noopener noreferrer"},p=l(`<h2 id="situations" tabindex="-1"><a class="header-anchor" href="#situations" aria-hidden="true">#</a> Situations</h2><h3 id="check" tabindex="-1"><a class="header-anchor" href="#check" aria-hidden="true">#</a> Check</h3><h3 id="checkmate" tabindex="-1"><a class="header-anchor" href="#checkmate" aria-hidden="true">#</a> Checkmate</h3><ul><li><p>Fool&#39;s mate: 2 move checkmate</p><ol><li><code>f3</code> <code>e6</code></li><li><code>g4</code> <code>Qh4#</code></li></ol></li><li><p>Scholar&#39;s mate: The 4 Move Checkmate</p></li></ul><h3 id="stalemate" tabindex="-1"><a class="header-anchor" href="#stalemate" aria-hidden="true">#</a> Stalemate</h3><h3 id="others" tabindex="-1"><a class="header-anchor" href="#others" aria-hidden="true">#</a> Others</h3><ul><li>Zugzwang</li></ul><h2 id="phases" tabindex="-1"><a class="header-anchor" href="#phases" aria-hidden="true">#</a> Phases</h2><p>3 Phases in Chess:</p><ol><li><p>The opening, where piece development and control of the centre predominate</p></li><li><p>The middlegame, where maneuvering in defense and attack against the opponent&#39;s king or weaknesses occurs</p></li><li><p>The endgame, where, generally after several piece exchanges, pawn promotion becomes the dominant theme</p></li></ol><h3 id="opening" tabindex="-1"><a class="header-anchor" href="#opening" aria-hidden="true">#</a> Opening</h3><p>Setups:</p><ul><li><p>Sicilian Defence:</p><ol><li>e4 c5</li></ol></li><li><p>London system</p></li><li><p>Evans Gambit</p></li><li><p>King&#39;s Gambit:</p><ol><li>e4 e5</li><li>f4</li></ol></li><li><p>King&#39;s Indian Defence:</p><ol><li>d4 Nf6</li><li>c4 g6</li></ol></li><li><p>Benko Gambit (or Volga Gambit):</p><ol><li>d4 Nf6</li><li>c4 c5</li><li>d5 b5</li></ol></li></ul><p>What is the first worst move that a white can play at the starting position?</p><ul><li>F3 with the Pawn?</li></ul><p>What is the best opening?</p><ul><li>Caro–Kann Defence (e4, c6)</li></ul><h3 id="middlegame" tabindex="-1"><a class="header-anchor" href="#middlegame" aria-hidden="true">#</a> Middlegame</h3><ul><li>Strategic play</li><li>Tactical play</li></ul><h3 id="endgame" tabindex="-1"><a class="header-anchor" href="#endgame" aria-hidden="true">#</a> Endgame</h3><h2 id="names-of-moves" tabindex="-1"><a class="header-anchor" href="#names-of-moves" aria-hidden="true">#</a> Names of Moves</h2><ul><li>Scholar&#39;s Mate: The 4 Move Checkmate</li><li>Sicilian Defence</li><li>Wing Gambit</li><li>Rossolimo Attack Variation</li></ul><h2 id="games" tabindex="-1"><a class="header-anchor" href="#games" aria-hidden="true">#</a> Games</h2><ul><li>Adams vs Fabrego (1988) (white checkmates in 2 moves)</li></ul><div class="language-text" data-ext="text"><pre class="language-text"><code> -------------------------------
| *R|   |   |   |   | *K| *R|   | 8
|---+---+---+---+---+---+---+---|
|   | *B|   |   | R |   | *N|   | 7
|---+---+---+---+---+---+---+---|
| *P| *Q|   |   |   |   | *P|   | 6
|---+---+---+---+---+---+---+---|
|   |   |   |   | Q |   |   |   | 5
|---+---+---+---+---+---+---+---|
|   | *P|   |   |   |   | P |   | 4
|---+---+---+---+---+---+---+---|
|   |   |   |   |   | P |   |   | 3
|---+---+---+---+---+---+---+---|
| P | P | P |   |   |   |   | P | 2
|---+---+---+---+---+---+---+---|
|   | K |   |   | R |   |   |   | 1
 -------------------------------
  a   b   c   d   e   f   g   h
</code></pre></div><ul><li><p>The Gold Coin Game: Stefan Levitsky vs Frank Marshall (1912)</p></li><li><p>Opera Game: Paul Morphy vs Duke Karl (1858)</p></li></ul><h2 id="puzzles" tabindex="-1"><a class="header-anchor" href="#puzzles" aria-hidden="true">#</a> Puzzles</h2><ul><li>Paul Morphy (white checkmate in 2 moves)</li></ul><div class="language-text" data-ext="text"><pre class="language-text"><code> -------------------------------
|   |   |   |   |   | K | *B| *K| 8
|---+---+---+---+---+---+---+---|
|   |   |   |   |   |   | *P| *P| 7
|---+---+---+---+---+---+---+---|
|   |   |   |   |   |   | P |   | 6
|---+---+---+---+---+---+---+---|
|   |   |   |   |   |   |   |   | 5
|---+---+---+---+---+---+---+---|
|   |   |   |   |   |   |   |   | 4
|---+---+---+---+---+---+---+---|
|   |   |   |   |   |   |   |   | 3
|---+---+---+---+---+---+---+---|
|   |   |   |   |   |   |   |   | 2
|---+---+---+---+---+---+---+---|
|   |   |   |   |   |   |   | R | 1
 -------------------------------
  a   b   c   d   e   f   g   h
</code></pre></div><h2 id="chess-engines" tabindex="-1"><a class="header-anchor" href="#chess-engines" aria-hidden="true">#</a> Chess Engines</h2>`,30),g={href:"https://github.com/official-stockfish/Stockfish",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/LeelaChessZero/lc0",target:"_blank",rel:"noopener noreferrer"},f=e("h2",{id:"references",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#references","aria-hidden":"true"},"#"),n(" References")],-1),x=e("ul",null,[e("li",null,"Dvoretsky's Endgame Manual")],-1);function b(k,v){const a=o("ExternalLinkIcon");return s(),d("div",null,[r,e("ul",null,[c,e("li",null,[e("p",null,[e("a",u,[n("En Passant"),i(a)])])])]),p,e("ul",null,[e("li",null,[e("a",g,[n("Stockfish"),i(a)])]),e("li",null,[e("a",m,[n("LeelaChessZero"),i(a)])])]),f,x])}const _=t(h,[["render",b],["__file","Chess.html.vue"]]);export{_ as default};
