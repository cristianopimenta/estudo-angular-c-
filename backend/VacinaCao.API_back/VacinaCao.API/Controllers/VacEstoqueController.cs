using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using VacinaCao.API.Data;
using VacinaCao.API.Models;

namespace VacinaCao.API.Controllers
{
    
        [Route("api/[controller]")]
        [ApiController]

        public class Estoque_VacinaController : ControllerBase
        {
            private readonly VacinaCaoContext _estoque;


            public Estoque_VacinaController(VacinaCaoContext context)
            {
                _estoque = context;
            }

            [HttpGet]
            [Route("/VacEstoque")]
            public async Task<ActionResult> GetPaciente()
            {
                return Ok(await _estoque.Estoque_Vacina.ToListAsync());
            }

            [HttpPost]
            [Route("/VacEstoque")]
            public async Task<ActionResult> CreateEstoque_Vacina(VacEstoque Estoque_Vacina)
            {
                await _estoque.Estoque_Vacina.AddAsync(Estoque_Vacina);
                await _estoque.SaveChangesAsync();
                return Ok(Estoque_Vacina);
            }

            [HttpPut]
            [Route("/VacEstoque")]
            public async Task<ActionResult> UpdateEstoque_Vacina(VacEstoque estoque)
            {
                var dbEstoque_Vacina = await _estoque.Estoque_Vacina.FindAsync(estoque.VaciId);
                if (dbEstoque_Vacina == null)
                    return NotFound();

                dbEstoque_Vacina.Nome_Vacina = estoque.Nome_Vacina;
                dbEstoque_Vacina.Quantidade = estoque.Quantidade;  
                dbEstoque_Vacina.Descricao = estoque.Descricao;
                dbEstoque_Vacina.Data_Fabricacao = estoque.Data_Fabricacao;
                dbEstoque_Vacina.Data_Validade = estoque.Data_Validade;
                dbEstoque_Vacina.Lote = estoque.Lote;
                dbEstoque_Vacina.Refrigeracao   = estoque.Refrigeracao;    
                

                await _estoque.SaveChangesAsync();
                return Ok(new
                {
                    data = estoque,
                    success = true,
                    message = "Alterado com Sucesso"

                });
            }
            [HttpDelete]
            [Route("/VacEstoque")]
            public async Task<ActionResult> UpdateEstoque_Vacina(Guid PacId)
            {
                var dbEstoque_Vacina = await _estoque.Estoque_Vacina.FindAsync(PacId);

                if (dbEstoque_Vacina == null)
                    return NotFound();

                _estoque.Estoque_Vacina.Remove(dbEstoque_Vacina);

                await _estoque.SaveChangesAsync();

                return Ok(new
                {
                    success = true,
                    message = "Deletado com Sucesso"

                });

            }


        }
    
}