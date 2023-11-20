using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using VacinaCao.API.Data;
using VacinaCao.API.Models;

namespace VacinaCao.API.Controllers
{
   
        [Route("api/[controller]")]
        [ApiController]

    public class VacinaController : Controller
    {
        private readonly VacinaCaoContext _vacina;


            public VacinaController(VacinaCaoContext context)
            {
                _vacina = context;
            }

            [HttpGet]
            [Route("/Vacinacao")]
            public async Task<ActionResult> GetPaciente()
            {
                return Ok(await _vacina.Vacinacao.ToListAsync());
            }

            [HttpPost]
            [Route("/Vacinacao")]
            public async Task<ActionResult> CreateVacinacao(Vacinacao Vacinacao)
            {
                await _vacina.Vacinacao.AddAsync(Vacinacao);
                await _vacina.SaveChangesAsync();
                return Ok(Vacinacao);
            }

            [HttpPut]
            [Route("/Vacinacao")]
            public async Task<ActionResult> UpdateVacinacao(Vacinacao vacina)
            {
                var dbVacinacao = await _vacina.Vacinacao.FindAsync(vacina.VaciId);
                if (dbVacinacao == null)
                    return NotFound();

            dbVacinacao.Data_Aplicacao = vacina.Data_Aplicacao;
            dbVacinacao.Reacoes = vacina.Reacoes;


                await _vacina.SaveChangesAsync();
                return Ok(new
                {
                    data = vacina,
                    success = true,
                    message = "Alterado com Sucesso"

                });
            }
            [HttpDelete]
            [Route("/Vacinacao")]
            public async Task<ActionResult> UpdateVacinacao(Guid PacId)
            {
                var dbVacinacao = await _vacina.Vacinacao.FindAsync(PacId);

                if (dbVacinacao == null)
                    return NotFound();

                _vacina.Vacinacao.Remove(dbVacinacao);

                await _vacina.SaveChangesAsync();

                return Ok(new
                {
                    success = true,
                    message = "Deletado com Sucesso"

                });

            }


        }
    }
