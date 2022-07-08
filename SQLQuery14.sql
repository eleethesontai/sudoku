drop table if exists #t
create table #t (v int)
insert into #t values (1),(2),(3),(4)

select*
from (
	select*
	from (
		select 
			a.v a,
			b.v b,
			c.v c,
			d.v d, 
			e.v e,
			f.v f,
			g.v g,
			h.v h,
			i.v i,
			j.v j,
			k.v k,
			l.v l,
			m.v m,
			n.v n,
			o.v o,
			p.v p
		from 
			#t a cross join
			#t b cross join 
			#t c cross join 
			#t d cross join

			#t e cross join
			#t f cross join 
			#t g cross join 
			#t h cross join

			#t i cross join
			#t j cross join 
			#t k cross join 
			#t l cross join

			#t m cross join
			#t n cross join 
			#t o cross join 
			#t p
	) q
	where
		a not in (b,c,d, e,i,m, b,e,f) and
		b not in (a,c,d, f,j,n, a,e,f) and
		c not in (a,b,d, g,k,o, d,g,h) and
		d not in (a,b,c, h,l,p, c,g,h) and

		e not in (f,g,h, a,i,m, a,b,f) and 
		f not in (e,g,h, b,j,n, a,b,e) and
		g not in (e,f,h, c,k,o, c,d,h) and
		h not in (e,f,g, d,l,p, c,d,g) and
	
		i not in (j,k,l, a,e,m, j,m,n) and
		j not in (i,k,l, b,f,n, i,m,n) and
		k not in (i,j,l, c,g,o, l,o,p) and
		l not in (i,j,k, d,h,p, k,o,p) and

		m not in (n,o,p, a,e,i, i,j,n) and 
		n not in (m,o,p, b,f,j, i,j,m) and 
		o not in (m,n,p, c,g,k, k,l,p) and 
		p not in (m,n,o, d,h,l, k,l,o) 
) q1
where
	a=1 and b=2 and c=3 and d=4 and
	g=1 and h=2 and 
	l=1 and 
	n=1